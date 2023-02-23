const { getAllUserSQL, postAllUserSQL, getAllQuestionSQL, postAllQuestionSQL, postCatalogySQL, getCatalogySQL, postCataQuesSQL, postProfile, getCataQuesSQL, updateViewSQL, postAnswerSQL, getAllAnswerSQL, getQuesAnswerSQL, delAnswerSQL, updateAnswerSQL, getCataSQL, getCountAnswerSQL, updateVoteQuesSQL, updateVoteAnsSQL, updatePassSQL } = require('../models/app.models.js')

const nodemailer = require('nodemailer');

const option = {
    service: 'gmail',
    auth: {
        user: 'ducanh.nl2@gmail.com', // email hoặc username
        pass: 'vvbuygnkqdhtphwk' // password
    }
};
var transporter = nodemailer.createTransport(option);
transporter.verify(function (error, success) {
    // Nếu có lỗi.
    if (error) {
        console.log(error);
    } else { //Nếu thành công.
        console.log('Kết nối thành công!');
    }
});



module.exports.forgotPass = async (req, res) => {
    let { email, token } = req.body;
    let [data] = await getAllUserSQL();
    let user = data.find((item) => item.email === email);
    if (!user) {
        res.send({ message: 'Email không tồn tại' })
    } else {
        var mail = {
            from: 'ducanh.nl2@gmail.com', // Địa chỉ email của người gửi
            to: `${email}`, // Địa chỉ email của người gửi
            subject: 'Thư được gửi admin', // Tiêu đề mail
            text: 'Đăng kí tài khoản tiktok', // Nội dung mail dạng text
            html: `<h1>Chào ${user.username}</h1>
                <p>Chúng tôi đã thay đổi mật khẩu của bạn thành mã ngẫu nhiên. </p>
                <p>Mật khẩu mới của bạn là:</p>
                <p>Mã MK: ${token}</p>
                <p>Cảm ơn bạn đã quan tâm đến trang web của chúng tôi</p>
            ` // Nội dung mail dạng html
        };
        // Tiến hành gửi email
        transporter.sendMail(mail, function (error, info) {
            if (error) { // nếu có lỗi
                console.log(error);
            } else { //nếu thành công
                console.log('Email sent: ' + info.response);
            }
        });
        await updatePassSQL([token, user.user_id]);
        res.json({
            message: 'Một email đã gửi đến bạn. Xin hãy xác nhận qua email'
        })
    }
}



module.exports.getAllUser = async (req, res) => {
    let [record] = await getAllUserSQL()
    res.send(record)
}
module.exports.getUser = async (req, res) => {
    let [record] = await getAllUserSQL()
    let user = record.find((item) => item.user_id == req.params.id)
    res.send(user)
}
module.exports.updatePass = async (req, res) => {
    await updatePassSQL([req.body.password, req.params.id])
    res.send({ message: 'Change password successfully' })
}

module.exports.postAllUser = async (req, res) => {
    let [record] = await getAllUserSQL();
    let user_id = record.length + 1;
    let { username, email, password, checkBonus, image, address } = req.body;
    let arr = [user_id, username, email, password, checkBonus]
    await postAllUserSQL(arr)
    await postProfile([user_id, username, address, image])
    res.send({ message: 'Post successfully' })
}
module.exports.getAllQuestion = async (req, res) => {
    let [record] = await getAllQuestionSQL()
    let [cataQues] = await getCataQuesSQL()
    let [countAns] = await getCountAnswerSQL();
    let test = cataQues.reduce((arr, item) => {
        let flag = false;
        arr.forEach(e => {
            if (e.ques_id == item.ques_id) {
                e.cata_name.push(item.cata_name);
                flag = true;
            }
        });
        if (flag == false) {
            let obj = {
                ques_id: item.ques_id,
                cata_name: [item.cata_name]
            }
            arr.push(obj)
        }
        return arr;
    }, [])

    record.forEach((item) => {
        test.forEach((e) => {
            if (item.ques_id == e.ques_id) {
                item.cata_name = e.cata_name
            }
        })
        for (let i = 0; i < countAns.length; i++) {
            if (item.ques_id == countAns[i].ques_id) {
                item.answers = countAns[i].answers;
                break;
            } else {
                item.answers = 0
            }
        }
    })
    res.send(record)
}
module.exports.getQuestion = async (req, res) => {
    let [record] = await getAllQuestionSQL()
    let question = record.find((item) => item.ques_id == req.params.id)
    let [cataQues] = await getCataQuesSQL()
    let test = cataQues.reduce((arr, item) => {
        let flag = false;
        arr.forEach(e => {
            if (e.ques_id == item.ques_id) {
                e.cata_name.push(item.cata_name);
                flag = true;
            }
        });
        if (flag == false) {
            let obj = {
                ques_id: item.ques_id,
                cata_name: [item.cata_name]
            }
            arr.push(obj)
        }
        return arr;
    }, [])
    test.forEach((item) => {
        if (item.ques_id == question.ques_id) {
            question.cata_name = item.cata_name
        }
    })
    res.send(question)
}
module.exports.postQuestion = async (req, res) => {
    let [record] = await getAllQuestionSQL();
    let [catalogy] = await getCatalogySQL();
    let ques_id = record.length + 1;
    let { user_id, title, code, text, tag } = req.body;
    let arr = [ques_id, user_id, title, code, text, 0, 0]
    await postAllQuestionSQL(arr);
    let cataID;
    let tagArr = tag.split(' ');
    let findCataArr = [];
    tagArr.forEach((e) => {
        let findCata = catalogy.find((item) => item.cata_name == e);
        if (findCata) findCataArr.push(findCata);
    })
    if (findCataArr.length == 0) {
        cataID = catalogy.length
        for (let i = 0; i < tagArr.length; i++) {
            ++cataID;
            await postCatalogySQL([cataID, tagArr[i]])
            await postCataQuesSQL([ques_id, cataID])
        }
    } else if (findCataArr.length == tagArr.length) {
        findCataArr.forEach(async (item) => {
            cataID = item.cata_id;
            await postCataQuesSQL([ques_id, cataID])
        })
    } else {
        findCataArr.forEach(async (item) => {
            cataID = item.cata_id;
            await postCataQuesSQL([ques_id, cataID])
        })
        let value = findCataArr.map((item) => item.cata_name)
        let newCata = tagArr.filter((item) => value.includes(item) == false);
        cataID = catalogy.length + 1;
        cataID = catalogy.length
        for (let i = 0; i < newCata.length; i++) {
            ++cataID;
            await postCatalogySQL([cataID, newCata[i]])
            await postCataQuesSQL([ques_id, cataID])
        }
    }
    res.send({ message: 'Post successfully' })
}
module.exports.updateView = async (req, res) => {
    await updateViewSQL([req.body.view, req.params.id])
    res.send({ message: 'Update successfully' })
}
module.exports.updateVoteQues = async (req, res) => {
    await updateVoteQuesSQL([req.body.vote, req.params.id])
    res.send({ message: 'Update successfully' })
}
module.exports.updateVoteAns = async (req, res) => {
    await updateVoteAnsSQL([req.body.vote, req.params.id])
    res.send({ message: 'Update successfully' })
}
module.exports.postAnswer = async (req, res) => {
    let [record] = await getAllAnswerSQL();
    let { user_id, ques_id, content, vote } = req.body
    await postAnswerSQL([record.length + 1, ques_id, user_id, content, vote])
    res.send({
        message: 'Post successfully',
        ans_id: record.length + 1
    })
}
module.exports.getQuesAnswer = async (req, res) => {
    let [record] = await getQuesAnswerSQL([req.params.id])
    res.send(record)
}
module.exports.delAnswer = async (req, res) => {
    await delAnswerSQL([req.params.id]);
    res.send({ message: 'Delete successfully' })
}

module.exports.updateAnswer = async (req, res) => {
    await updateAnswerSQL([req.body.content, req.params.id]);
    res.send({ message: 'Update successfully' })
}

module.exports.getCata = async (req, res) => {
    let [record] = await getCataSQL()
    record.forEach((item) => {
        item.time = item.time.getTime();
        if (item.question === null) item.question = 0
    })
    res.send(record)
}
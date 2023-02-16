const { getAllUserSQL, postAllUserSQL, getAllQuestionSQL, postAllQuestionSQL, postCatalogySQL, getCatalogySQL, postCataQuesSQL, postProfile, getCataQuesSQL } = require('../models/app.models.js')


module.exports.getAllUser = async (req, res) => {
    let [record] = await getAllUserSQL()
    res.send(record)
}
module.exports.getUser = async (req, res) => {
    let [record] = await getAllUserSQL()
    let user = record.find((item) => item.user_id == req.params.id)
    res.send(user)
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
    let findCata = catalogy.find((item) => item.name == tag)
    let arr = [ques_id, user_id, title, code, text, 0, 0]
    await postAllQuestionSQL(arr);
    let cataID;
    if (!findCata) cataID = catalogy.length + 1
    else cataID = findCata.cata_id;
    await postCatalogySQL([cataID, tag])
    await postCataQuesSQL([ques_id, cataID])
    res.send({ message: 'Post successfully' })
}
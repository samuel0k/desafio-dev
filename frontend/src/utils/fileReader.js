function createJsonFile(line){
    var kind = line[0]
    var data = line.slice(1,9)
    var value = line.slice(8, 19)
    var cpf = line.slice(19, 30)
    var card = line.slice(30, 42)
    var time = line.slice(41, 48)
    var owner = line.slice(48,62)
    var store = line.slice(62, 81).replace('\r', "")
    

    return {
        kind,
        data,
        value: Number(value) / 100,
        cpf,
        card,
        time: time,
        owner,
        store
    }
}


function parseLines(lines){
    const jsonData = []

    lines.map((line) => {
        var jsonLineData = createJsonFile(line)
        jsonData.push(jsonLineData)
    })

    return jsonData
}

function turnToJson(text){
    var lines = text.toString().trim().split('\n')
    var resp = parseLines(lines)
    return resp
}

export default turnToJson
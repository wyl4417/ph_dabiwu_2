// script.js

// 参赛者数据（通常这些数据会从服务器获取，但这里我们直接在代码中定义）
const participants = [
    { id: '647670', name: 'Mark Deneb Escat', group: 'A组', time: '1' },
    { id: '452604', name: '朱泽梁', group: 'A组', time: '2' },
    { id: '771311', name: '李德盛', group: 'A组', time: '3' },
    { id: '803266', name: '胡小峰', group: 'A组', time: '4' },
    { id: '570623', name: '郑渝', group: 'A组', time: '5' },
    { id: '624834', name: '陈舒倩', group: 'A组', time: '6' },
    { id: '544891', name: '刘佳晨', group: 'A组', time: '7' },
    { id: '648144', name: '田佳辉', group: 'A组', time: '8' },
    { id: '467290', name: '宋炜', group: 'A组', time: '9' },
    { id: '532919', name: '邢远洋', group: 'A组', time: '10' },
    { id: '855939', name: '林思博', group: 'A组', time: '11' },
    { id: '527890', name: '孟庆雯', group: 'A组', time: '12' },
    { id: '559181', name: 'Joshua Emmanuel Neric', group: 'A组', time: '13' },
    { id: '348986', name: 'Marc Lemuel L Angeles', group: 'A组', time: '14' },
    { id: '585675', name: '朱福安', group: 'A组', time: '15' },
    { id: '755985', name: 'Nikky Adams A Termulo', group: 'A组', time: '16' },
    { id: '895438', name: '白维健', group: 'A组', time: '17' },
    { id: '401566', name: '宗骏骁', group: 'A组', time: '18' },
    { id: '327568', name: 'Rannilo L Asi Jr', group: 'A组', time: '19' },
    { id: '559182', name: 'Jaycerine Rizel O Tan', group: 'A组', time: '20' },
    { id: '590573', name: '傅丹毅', group: 'A组', time: '21' },
    { id: '622892', name: '戴娇', group: 'A组', time: '22' },
    { id: '574695', name: '符纯浩', group: 'A组', time: '23' },
    { id: '806207', name: '于俊杰', group: 'A组', time: '24' },
    { id: '566655', name: '陈博文', group: 'A组', time: '25' },
    { id: '511044', name: '陈仕豪', group: 'A组', time: '26' },
    { id: '406582', name: '刘宁', group: 'B组', time: '1' },
    { id: '820456', name: 'Anallen Miciano', group: 'B组', time: '2' },
    { id: '518677', name: '邱绍彬', group: 'B组', time: '3' },
    { id: '832167', name: 'Kim Janico Aguilar', group: 'B组', time: '4' },
    { id: '456226', name: '王晨', group: 'B组', time: '5' },
    { id: '589471', name: '朱敬烽', group: 'B组', time: '6' },
    { id: '452644', name: '程曦', group: 'B组', time: '7' },
    { id: '521048', name: '王日上', group: 'B组', time: '8' },
    { id: '831374', name: 'Adrian Daruel Adriano', group: 'B组', time: '9' },
    { id: '448039', name: '马彬', group: 'B组', time: '10' },
    { id: '421175', name: '于璟泽', group: 'B组', time: '11' },
    { id: '84278634', name: 'Lau Guan Hong', group: 'B组', time: '12' },
    { id: '831405', name: 'Julie Ann Yazon', group: 'B组', time: '13' },
    { id: '533541', name: '陈子羽', group: 'B组', time: '14' },
    { id: '833918', name: '谭宁', group: 'B组', time: '15' },
    { id: '600328', name: '花静怡', group: 'B组', time: '16' },
    { id: '824709', name: 'Armaine Valdez', group: 'B组', time: '17' },
    { id: '625790', name: '林少煌', group: 'B组', time: '18' },
    { id: '423471', name: '冯天奇', group: 'B组', time: '19' },
    { id: '824736', name: 'Kristel Joy Flores', group: 'B组', time: '20' },
    { id: '662644', name: 'Jocelyn Bailon', group: 'B组', time: '21' },
    { id: '821982', name: 'Vince Andrei Hu', group: 'B组', time: '22' },
    { id: '832514', name: '陈勇', group: 'B组', time: '23' },
    { id: '883178', name: 'Meghan Gesmundo Pinana', group: 'B组', time: '24' },
    { id: '428568', name: '王欢欢', group: 'B组', time: '25' },
    { id: '595946', name: '郑传栖', group: 'B组', time: '26' },
    { id: '482073', name: 'Christianne Hazelle Lopez', group: 'B组', time: '27' }
];

document.getElementById('participantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const id = document.getElementById('id').value.trim();
    
    // 查找参赛者
    const participant = participants.find(p => p.name === name && p.id === id);
    
    const resultDiv = document.getElementById('result');
    
    if (participant) {
        // 显示结果
        resultDiv.textContent = `${name}，你被分到 ${participant.group}。你的比赛时间是 ${participant.time}。`;
    } else {
        // 显示未找到
        resultDiv.textContent = '未找到该参赛者。请检查名字和工号。';
    }
});

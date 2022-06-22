module.exports = {
    config: {
        name: 'runmocky',
        ver: '1.0.0',
        role: 0,
        author: ['Nguyễn Minh Huy (LorenBot)'],
        description: 'tạo text dưới dạng raw.',
        location: __filename,
        timestamps: 0
    }
};
module.exports.onMessage = function ({ event, args, api }) {
 var contents = args.join(" ")
 if (!contents) {
  return api.sendMessage('thiếu dữ liệu text!', event.threadID, event.messageID);
} else {
 const axios = require('axios');
 axios.post("https://api.mocky.io/api/mock",{"status": 200,"content": contents,"content_type": "application/json","charset": "UTF-8","secret": "NguyenMinhHuy","expiration": "never"}).then(function(response) {
  return api.sendMessage(`Kết quả: ${response.data.link}`, event.threadID, event.messageID);
 });
}
}
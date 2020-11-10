require('dotenv').config();
const Youtube = require('youtube-node');

const youtube = new Youtube()
youtube.setKey(process.env.YOUTUBE_API_KEY)

function searchVideoURL(message, queryText) {
  return new Promise((resolve, reject) => {

    youtube.search(queryText, 2, (err, result) => {
      if(!err) {
        const videoIds = result.items.map((item) => item.id.videoId).filter(item => item)
        const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`)

        resolve(`${message} ${youtubeLinks.join(', ')}`)

      }
      else {
        reject(`Deu erro! ${JSON.stringify(err,null,2)}`)
      }

    })
  });
}

module.exports.searchVideoURL = searchVideoURL;

const Telegraf = require('telegraf');
const axios = require('axios')                                                                            
const bot = new Telegraf('your bot token')

let lolkey = 'lolkeu'
let zeks = 'apivinz'
let pais = 'Tester'
let xteam = 'xteamkey'
let zhirr = 'zahirgans'

bot.command("start", ctx => {
    ctx.reply("Halo "+ctx.from.first_name);
    ctx.reply("Bagaimana Kabar Mu?",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Menu', callback_data: 'menu'},
                ]
            ]
        }
    })
})
                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
bot.action('menu', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    ctx.editMessageText('──────ᕙᕗ 𝓜𝓮𝓷𝓾 𝓚𝓾𝓻𝓪𝓼𝓪𝔀𝓪 𝓑𝓸𝓽 ᕙᕗ ──────\n\n──────ᕙᕗ 𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝕸𝖊𝖓𝖚 ᕙᕗ ──────\n1./tiktok (link video)\n2./ytsearch (judul)\n3./ytvideo (link)\n5./tiktokmsc (linkvideo)\n6./igdl (link)\n\n──────ᕙᕗ 𝓣𝓮𝔁𝓽 𝓜𝓪𝓴𝓮𝓻 ᕙᕗ ──────\n1./lightext (text)\n2./text3dbox (text)\n3./grafiti (text)\n4./nulis (text)\n5./ff (text)\n6./warzone (text)\n\n──────ᕙᕗ 𝓘𝓷𝓯𝓸𝓻𝓶𝓪𝓼𝓲  ᕙᕗ ──────\n1./wikipedia (pencarian)\n2./kbbi (pencarian)\n3./infogempa\n4./merdeka\n5./fakta\n6./jadwalsholat (kota)\n7./brainly (pencarian)\n8./quran (nomor surah)\n9./cuaca (kota)\n\n──────ᕙᕗ 𝓡𝓪𝓷𝓭𝓸𝓶  ᕙᕗ ──────\n1./shorturl (link)\n2./randomquotes\n3./quotes\n4./lirik (lagu)\n5./chord (lagu)\n6./tinyurl (link)\n\n──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴 ᕙᕗ ──────\n1./github (username)\n2./igstalk  (username)\n\n/\/\Source Code/\/\\n https://bit.ly/3vOIORq')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                             
bot.command('menu', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    ctx.reply('──────ᕙᕗ 𝓜𝓮𝓷𝓾 𝓚𝓾𝓻𝓪𝓼𝓪𝔀𝓪 𝓑𝓸𝓽 ᕙᕗ ──────\n\n──────ᕙᕗ 𝕯𝖔𝖜𝖓𝖑𝖔𝖆𝖉 𝕸𝖊𝖓𝖚 ᕙᕗ ──────\n1./yta (link)\n2./tiktok (link video)\n3./ytsearch (judul)\n4./ytvideo (link)\n5./tiktokmsc (linkvideo)\n6./igdl (link)\n\n──────ᕙᕗ 𝓣𝓮𝔁𝓽 𝓜𝓪𝓴𝓮𝓻 ᕙᕗ ──────\n1./lightext (text)\n2./text3dbox (text)\n3./grafiti (text)\n4./nulis (text)\n5./ff (text)\n6./warzone (text)\n\n──────ᕙᕗ 𝓘𝓷𝓯𝓸𝓻𝓶𝓪𝓼𝓲  ᕙᕗ ──────\n1./wikipedia (pencarian)\n2./kbbi (pencarian)\n3./infogempa\n4./merdeka\n5./fakta\n6./jadwalsholat (kota)\n7./brainly (pencarian)\n8./quran (nomor surah)\n9./cuaca (kota)\n\n──────ᕙᕗ 𝓡𝓪𝓷𝓭𝓸𝓶  ᕙᕗ ──────\n1./shorturl (link)\n2./randomquotes\n3./quotes\n4./lirik (lagu)\n5./chord (lagu)\n6./tinyurl (link)\n\n──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴 ᕙᕗ ──────\n1./github (username)\n2./igstalk  (username)\n\n/\/\Source Code/\/\\n https://bit.ly/3vOIORq')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                             
bot.command('infogempa', (ctx) => {
    ctx.reply('Tunggu Sebentar Saya Sedang Mencari Info.....')
    axios.get('https://mhankbarbar.herokuapp.com/api/infogempa')
    .then(res => {
        // console.log(res);
        ctx.reply("📍 Lokasi : "+res.data.lokasi+"\n🔽 Kedalaman : "+res.data.kedalaman+"\n📌 Koordinat : "+res.data.koordinat+"\n🔴 Magnitude : "+res.data.magnitude+"\n🔵 Potensi : "+res.data.potensi+"\n⏰ Waktu : "+res.data.waktu);
    }).catch(e => {
         console.log(e);
    })
})

bot.command('text3dbox', ctx => {
    ctx.reply('Mohon Menunggu....')
    let teks1 = ctx.message.text;
    let def = teks1.split("text3dbox ");
    def.shift();
        buku2 = def.join(" ");

    ctx.replyWithPhoto('http://api.zeks.xyz/api/text3dbox?apikey='+zeks+'&text='+buku2)
})

bot.command('wiki', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("wikipedia ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://alfians-api.herokuapp.com/api/wiki?q='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(`Ditemukan :${res.data.result}`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('shorturl', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("shorturl ");
    inputArray.shift();
              message = inputArray.join();                                              
    axios.get('http://public-restapi.herokuapp.com/api/bitly-shortener?url='+message)
    .then(res => {
         //console.log(res);
         let la = res.data.result
         ctx.reply(`
┣⊱ Url : ${res.data.long_url}
┣⊱ Short : ${res.data.link}
`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('yta', (ctx) => {
    ctx.reply('Tunggu.....')
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get("https://hadi-api.herokuapp.com/api/ytaudio?url="+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithAudio(res.data.result.download_audio);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('ytv', (ctx) => {
    ctx.reply('Tunggu.....')
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get("https://hadi-api.herokuapp.com/api/ytvideo?url="+message)
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.result.download_video);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('tiktok', (ctx) => {
    ctx.reply('Proses.....')
    let input = ctx.message.text;
    let inputArray = input.split("tiktok ");
    inputArray.shift();
              message = inputArray.join(" ");                                                                                                                                                                 
    axios.get('https://api.xteam.xyz/dl/tiktok?url='+message+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);
         ctx.replyWithVideo(res.data.server_1);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('lightext', ctx => {
    ctx.reply('Tunggu.....')
    let teks1 = ctx.message.text;
    let def = teks1.split("lightext ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/lithgtext?text='+buku2+'&apikey='+zeks)
    .then(res => {
    ctx.replyWithPhoto(res.data.result)
    })
})

bot.command('grafiti', ctx => {
    ctx.reply('Tunggu...')
    let teks1 = ctx.message.text;
    let def = teks1.split("grafiti ");
    def.shift();
        buku2 = def.join(" ");

    axios.get('http://api.zeks.xyz/api/grafiti?text='+buku2+'&apikey='+zeks)
    .then(res => {
        //console.log(res.data)
        ctx.replyWithPhoto(res.data.result)
    })
})

bot.command('quotes', (ctx) => {
    axios.get('https://mhankbarbar.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})
bot.command('randomquotes', (ctx) => {
    axios.get('http://docs-jojo.herokuapp.com/api/randomquotes')
    .then(res => {
         //console.log(res);
         ctx.reply("Author : "+res.data.author+"\nQuotes : "+res.data.quotes);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('kbbi', (ctx, args) => {
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
          message = inputArray.join(" ");

    //console.log
    axios.get('https://kbbi-api.xlaaf.repl.co/search?kata='+message)
    .then(res => {
        //console.log(res.data.search);
        ctx.reply("Kata: "+res.data.data.title+"\nDitemukan : "+res.data.data.arti)
    })
}) 

bot.command('nulis', (ctx) => {
    let teks = ctx.message.text;
    let abc = teks.split("nulis ");
    abc.shift();
        fgah = abc.join(" ");
        //console.log(message)                                                                                                                                                                                                       
        ctx.replyWithPhoto('http://api.zeks.xyz/api/nulis?text='+fgah+'&apikey='+zeks)
})                                                                                                 

bot.command('ytsearch', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Tolong Kasih Kata Yang Benar, Contoh: /ytsearch boboiboy"
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                                                                                    
        const link = await axios.get ('http://lolhuman.herokuapp.com/api/ytsearch?apikey='+lolkey+'&query='+messager)
        const { result } = link.data
        const hasil = result.slice(0, 3)
        hasil.forEach(async(res) => {
        ctx.replyWithPhoto({url: res.thumbnail}, {caption: `──────ᕙᕗ 𝐒𝐞𝐚𝐫𝐜𝐡  ᕙᕗ ────── 
                                                                                                                                                                                                 
ᕙᕗ Judul: ${res.title}
ᕙᕗLink: https://www.youtube.com/watch?v=${res.videoId}
ᕙᕗ Tanggal Unggahan: ${res.published}
ᕙᕗ Penonton: ${res.views}
`})
         
                    })
        }catch(e){
        }
}
})


bot.command('github', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Contoh: /github python" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{
            const link = await axios.get('https://pencarikode.xyz/stalk/github?q='+messager+'&apikey='+pais)
            const data = link.data.result
            ctx.replyWithPhoto({url: data.avatar_url}, {caption: `──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴  ᕙᕗ ──────
ᕙᕗ Pengguna: ${data.username}
ᕙᕗ Nama: ${data.name}
ᕙᕗ Id: ${data.id}
ᕙᕗ Url: ${data.url}
ᕙᕗ Tipe: ${data.type}
ᕙᕗ Perusahaan: ${data.company}
ᕙᕗ Blog: ${data.blog}
ᕙᕗ Lokasi: ${data.location}
ᕙᕗ Email: ${data.email}
ᕙᕗ Biodata: ${data.bio}
ᕙᕗ Twitter: ${data.twitter_username}
ᕙᕗ Repo: ${data.public_repos}
ᕙᕗ Pengikut: ${data.followers}
ᕙᕗ Diikuti: ${data.following}
ᕙᕗ Bergabung Pada: ${data.created_at}
`})
        }catch{
            ctx.reply(`Rusak!`)
        }  
    }
})
bot.command('igstalk', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";

    if(inputArray.length == 1){
        message = "Contoh: /igstalk xlaaff" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                        
        const link = await axios.get('https://pencarikode.xyz/stalk/instagram?username='+messager+'&apikey='+pais)
        const data = link.data.result.user                                                                   
        ctx.replyWithPhoto({url: data.hd_profile_pic_versions[0].url}, {caption: `──────ᕙᕗ 𝓢𝓽𝓪𝓵𝓴  ᕙᕗ ──────
        
ᕙᕗ Username: ${data.username}
ᕙᕗ Nama: ${data.full_name}
ᕙᕗ Terverifikasi: ${data.is_verified ? 'Ya' : 'Tidak'}
ᕙᕗ Media: ${data.media_count}
ᕙᕗ Pengikut: ${data.follower_count}
ᕙᕗ Diikuti: ${data.following_count}
ᕙᕗ Biodata: ${data.biography}
ᕙᕗ Kategori: ${data.category ? `${data.category}` : null}
ᕙᕗ Url Biodata: ${data.external_url ?  `${data.external_url}` : null }
ᕙᕗ Total Igtv: ${data.total_igtv_videos}
ᕙᕗ Bisnis: ${data.is_business ? 'Ya' : 'Tidak'}
ᕙᕗ WhatsApp: ${data.whatsapp_number ? `${data.whatsapp_number}` : null}
`})
        }catch{
            ctx.reply(`Tidak Ditemukan`)
        }
    }
})

  
bot.command('merdeka', async (ctx) => {
    try{                                                                                                                                                                                              
    const link = await axios.get (`https://pencarikode.xyz/news/merdeka?apikey=`+pais)
    const linke = link.data.result
    const random = linke[Math.floor(Math.random() * (linke.length))]                                                                                                                                                                                           
    ctx.replyWithPhoto({ url: random.thumb}, { caption: `──────ᕙᕗ 𝓝𝓮𝔀𝓼 ᕙᕗ ──────\n\nᕙᕗ Judul: ${random.judul}\n\nᕙᕗ Diunggah: ${random.uptime}\n\nᕙᕗ Link : ${random.link}`})
    
    }catch(e){
    }
})                                                                       

bot.command('tiktokmsc', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Tolong Sertakan Link, contoh: /tiktokmsc https://vt.tiktok.com/ZSJDd3PqT/"
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        try{                                                                                                                                 
        ctx.replyWithAudio({url: `https://lolhuman.herokuapp.com/api/tiktokmusic?apikey=`+lolkey+`&url=`+messager}, {title: '@kurasawabot'})
        }catch(e){
            ctx.reply(`Link tidak ditemukan`)
        }
    }
})

bot.command('lirik', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("lirik ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://lyrics-api.xlaaf.repl.co/search?q='+message)
    .then(res => {
         //console.log(res);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
             ctx.reply(`ᕙᕗ Found Lyrics: ${res.data.data}`)
    }).catch(e => {
         console.log(e);
   })
})

bot.command('fakta', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("fakta ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://videfikri.com/api/fakta/')
    .then(res => {
         //console.log(res);
         ctx.reply('Cek fakta\n'+res.data.result.fakta); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('igdl', ctx => {
    let input = ctx.message.text;
    ctx.reply('Mohon  Tunggu.....')
        let inputArray = input.split(" ");
        inputArray.shift();
        let link = inputArray.join(" ")
    axios.get('https://lolhuman.herokuapp.com/api/instagram?apikey='+lolkey+'&url='+link)
    .then(res => {
    ctx.replyWithVideo(res.data.result)
    })
})

bot.command('google', ctx => {
    let input = ctx.message.text;
    ctx.reply('Mohon  Tunggu.....')
        let inputArray = input.split(" ");
        inputArray.shift();
        let link = inputArray.join(" ")
    axios.get('https://google-api.xlaaf.repl.co/search?q='+link).then(res => {
    const linke = res.data.data
    const g = linke[Math.floor(Math.random() * (linke.length))]
    ctx.reply('Ditemukan: '+link+'\n'+g.title+'\nUrl: '+g.link+'\nDesk: '+g.desk)
    })
  })

bot.command('ff', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "tOLONG tAMBAHKAN tEKS, CoNtOh: /ff burik"
        ctx.reply(message)
    } else{
        inputArray.shift();
        burik = inputArray.join(" ")
        try{                                                                                                                                                                                                                      
            ctx.replyWithPhoto({url: 'http://lolhuman.herokuapp.com/api/ephoto1/freefire?apikey='+lolkey+'&text='+burik})
        }catch(e){
        }
    }
})

bot.command('warzone', async (ctx) => {
    let input = ctx.message.text  
    const peak = input.trim().substring(input.indexOf(' ') + 1)
    if (peak.length >= 2) {
    const jaki = peak.split(`|`)[0]
    const gans = peak.split(`|`)[1]
    if(!jaki, !gans){
        ctx.reply('Tambahkan Teks contoh: /warzone jaki|gans')
    }else{                                                                                                                                                                                                                                                           
    ctx.replyWithPhoto({url: 'http://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey='+lolkey+'&text1='+jaki+'&text2='+gans})
        }
    }else{
        ctx.reply(`Ikuti Contoh Ini /arzone jaki|gans`)
    }
})
    
bot.command('cuaca', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("cuaca ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://api.xteam.xyz/cuaca?kota='+pesan+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         ctx.reply(`Kota : ${res.data.message.kota}\nHari : ${res.data.message.hari}\nCuaca: ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nSuhu : ${res.data.message.suhu}\nTekanan : ${res.data.message.pressure}\nKelembapan : ${res.data.message.kelembapan}\nAngin : ${res.data.message.angin}`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('quran', (ctx) => {
    ctx.reply("Tunggu..")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              message = inputArray.join(" ");
    
    axios.get('https://hadi-api.herokuapp.com/api/quran?no='+message)
    .then(res => {
        //console.log(res.data.result.list);                                                                                         
        ctx.reply("Surah : "+res.data.result.surah+"\nAyat: "+res.data.result.ayat+"\nTerjemahan: "+res.data.result.terjemahan)
    }).catch(e => {
        console.log(e);
    })
})

bot.command('chord', (ctx) => {
    let input = ctx.message.text;
    let inputArray = input.split("chord ");
    inputArray.shift();
              pesan = inputArray.join(" ");

    axios.get('https://alfians-api.herokuapp.com/api/chord?q='+pesan)
    .then(res => {
         //console.log(res);
         ctx.reply(res.data.result);
    }).catch(e => {
         console.log(e);
   })
})

bot.command('brainly', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("brainly ");
    inputArray.shift();
              message = inputArray.join(" ");

    axios.get('https://api.xteam.xyz/brainly?soal='+message+'&APIKEY='+xteam)
    .then(res => {
         //console.log(res);
         ctx.reply('Soal:'+res.data.soal+'\nJawaban:\n'+res.data.jawaban); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('tinyurl', (ctx) => { 
    let input = ctx.message.text;
    let inputArray = input.split("tinyurl ");
    inputArray.shift();
              pesan = inputArray.join();                                              
    axios.get('https://zahirr-web.herokuapp.com/api/short/tiny?url='+pesan+'&apikey='+zhirr)
    .then(res => {
         //console.log(res);
         let la = res.data.result
         ctx.reply(`
┣⊱ Short : ${res.data.result.link}
`); 
    }).catch(e => {
         console.log(e);
   })
})

bot.command('jadwalsholat', (ctx) => {
    ctx.reply("Tunggu..")
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");
    
    axios.get('https://api.xteam.xyz/jadwalsholat?kota='+pesan+'&APIKEY='+xteam)
    .then(res => {
    	//console.log(res)
        ctx.reply("Kota : "+res.data.Kota+"\nDaerah : "+res.data.daerah+"\nTanggal: "+res.data.Tanggal+"\nSubuh: "+res.data.Subuh+"\nDzuhur: "+res.data.Dzuhur+"\nAshar: "+res.data.Ashar+"\nMaghrib: "+res.data.Magrib+"\nIsya: "+res.data.Isha)
    }).catch(e => {
        console.log(e);
    })
})



bot.launch()


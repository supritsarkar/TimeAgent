const say = require('say');
const cron = require('node-cron');

function tellTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const formattedTime = new Intl.DateTimeFormat('en-US',{
        hour:'numeric',
        minute:'2-digit',
        hour12:true,
    }).format(now);

    console.log(`⏰ Time Check: ${formattedTime}`);
    say.speak(`It's now ${formattedTime} `);
}

tellTime();

//now I gotta use cron for scheduling part
//Run the task at the 0th minute (i.e., :00) of every hour, every day.
cron.schedule('0 * * * *',()=>{ 
    tellTime();
})


//!to stop this cronjob just write this in bash
//pm2 stop time-agent

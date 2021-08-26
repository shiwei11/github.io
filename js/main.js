// 加载页面
// $(window).on('load',function(){
//     $('.loader').hide(0);
// })
$(function(){
$('#fullpage').fullpage({
anchors: ['firstPage', 'secondPage'],
menu: '#Menu',
// 不记录上次访问的页面
recordHistory: false,
// autoScrolling:false,
afterLoad:function(anchorLink,index){
if(index==2)
{//加载文案
    var sentence=[
        '我们都生活在阴沟里，但仍有人仰望星空。',
        '如果你瞄准月亮，即使迷失也是落在星河之间',
        '摘下星星给你，摘下月亮给你，你想要都给你，别再烦恼丧气满脑想着放弃',
        '携带满天星光奔赴更美好的未来',
        '月亮踩碎星光，我们都是藏于银河的幻想',
        '熬过去的那一天，把山河星月当作贺礼'
    ]
let oneSentence=sentence[Math.floor(Math.random()*(sentence.length))];
$(".excerpt").text(oneSentence);
//打字机
let tips=["技术&生活&分享&回忆","使用PC端谷歌浏览器访问体验更佳","欢迎通过上一页的平台联系我","蓬门今始为君开"];
//添加文本
function setText(t){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            $(".tag").text(t);
            resolve();
        },100)//打字速度
    })
}
async function main(flag,word){
    if(flag==1){  
        //打印字符串  
   for(let i=0;i<=word.length;i++){
        await setText(word.substr(0,i)); 
    } 
    setTimeout(()=>{
    main(!flag,word);
},2000)//句子打印完成，停留2s后开始删除
}else{
    //删除字符串效果
    for(let i=word.length;i>=0;i--){
        await setText(word.substr(0,i));
    }
    setTimeout(()=>{
    main(!flag,tips[++j]);
  //字符串数组遍历完毕，重新开始遍历
    if(j==(tips.length-1)){
        j=-1;
    }
},2000)//开始下一组打印
}
}
let j=0;
main(1,tips[j]);
//打字机结束

}
}
});
$.fn.fullpage.setAllowScrolling(false,'up');
// 显示副标题，延迟3000ms
$('.tlt').textillate({initialDelay: 1000});
$('.septum').textillate({in:{delay: 100}});

});   
// 倒计时
    let end=new Date('2021-12-23 00:00:00').getTime();
    function cutdown(){
        let now=new Date().getTime();
        let gap=end-now;
        let eSecond=1000;
        let eMinute=eSecond*60;
        let eHour=eMinute*60;
        let eDay=eHour*24;
        let days=Math.floor(gap/eDay);
        let hours=Math.floor((gap%(eDay))/(eHour));
        let minutes=Math.floor((gap%(eHour))/(eMinute));
        let seconds=Math.floor((gap%(eMinute))/(eSecond));
        document.getElementById('day').innerText=days;
        document.getElementById('hour').innerText=hours;
        document.getElementById('minute').innerText=minutes;
        document.getElementById('second').innerText=(seconds>=10)?seconds:'0'+seconds;
    }
    setInterval(function(){
        cutdown();
    },1000)
    document.addEventListener("visibilitychange",function(){
        if(document.visibilityState==="hidden"){
            document.title="这个页面会占用很多内存哦";
        }
        else{
            document.title="我刚刚在想你";
            setTimeout(function(){
                document.title="是shiwi啊";
            },3000)
        }
    })
    
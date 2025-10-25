const projects = [
    { name: "海康威视数据采集终端pda", description: "工业手持终端条码扫描枪仓储物流盘点机", 
        remark: "🔍提升工作效率，选择海康威视数据采集终端pda！京东配送，助力仓储物流与快递盘点，轻松应对各种挑战。📦✨到手价1426.00", 
        images: ['images/MV-IDP5204.jpg'], 
    links: [
        { text: "抢购链接", url: "https://u.jd.com/Bg79JoP" },
        { text: "官网介绍", url: "https://www.hikrobotics.com/cn/machinevision/productdetail/?id=10229" },
    ], 
    href: "https://u.jd.com/Bg79JoP" },

    { name: "得力一/二维码无线扫码枪", description: "有线无线双模式，大容量离线存储", 
        remark: "🔍 高效办公利器，轻松应对商品码、药品追溯码、支付码、快递物流码等多场景需求。京东配送，品质保证！💼📦到手价219.00", 
        images: ['images/AA302W.jpg'], 
    links: [
        { text: "抢购链接", url: "https://u.jd.com/pDwo53T" },
        { text: "使用说明书", url: "https://www.nbdeli.com/bocupload/2025/05/26/1748237543229202p20.pdf" },
    ], 
    href: "https://u.jd.com/pDwo53T" },

    { name: "H5扫码枪电脑端Java版", description: "基于Java开发的H5扫码枪电脑端应用", remark: "采用Java Swing桌面开发，接收手机端发送的WebSocket消息，并模拟键盘录入数据到电脑任意文本位置。", images: [], 
        links: [{ text: "源码地址", url: "https://gitee.com/zkool/h5-barcode-gun" },
            { text: "安装包下载地址", url: "https://pan.baidu.com/s/1qdaodlVBz-hVom27OJcFcA?pwd=ezym" },
            { text: "看我如何让手机秒变扫码枪", url: "https://mp.weixin.qq.com/s/SBzgM5bYv9QtvP-j6Cu32g" },
            { text: "H5扫码枪使用教程", url: "https://mp.weixin.qq.com/s/TAMKg-UtxGTqg3rNmBqAVg" },
            { text: "H5扫码枪 V1.2 发布，升级手机与PC电脑通讯方式为https+wss", url: "https://mp.weixin.qq.com/s/dtIQh74mFV4BgSYR9jqu0g" },
            { text: "H5扫码枪 V1.1.2 发布，手机端支持微信小程序局域网websocket通信", url: "https://mp.weixin.qq.com/s/qsM4-bnoRpPZJCetM5gvtg" },
        ], 
        href: "" },
    { name: "H5扫码枪电脑端Electron版", description: "基于Electron开发的H5扫码枪电脑端应用", remark: "为了满足用户围绕扫码的各种需求，对Java版重构，用户使用的手机端是手机浏览器还是PDA还是小程序，网络环境是局域网还是互联网还是离线都由用户自己选择。", 
        images: [], 
        links: [
            { text: "安装包下载地址", url: "https://pan.baidu.com/s/1qdaodlVBz-hVom27OJcFcA?pwd=ezym" },
            { text: "H5扫码枪V1.3.0发布！！！全新升级同时支持H5+PDA+小程序+局域网+互联网+离线等多终端多场景扫码", url: "https://mp.weixin.qq.com/s/kUqo6dQxCTj9AQzLNOmCiQ" },
            { text: "H5扫码枪V1.3.1发布！！！电脑端兼容32位操作系统+小程序端支持连续扫码", url: "https://mp.weixin.qq.com/s/lZ2OyR0wUfJkh2hHpW6P3g" },
            { text: "H5扫码枪V1.3.2发布！！！解锁发票核对技能", url: "https://mp.weixin.qq.com/s/kk2pl-laHrpWvPxhVS3y4A" },
            { text: "H5扫码枪V1.3.2使用说明", url: "https://mp.weixin.qq.com/s/AE7yfgDdb0nuqTUqMS8Xnw" },
            { text: "H5扫码枪V1.3.3发布！！！已上架到华军软件园", url: "https://www.onlinedown.net/soft/20269157.htm" },
        ], 
        href: "" },
    { name: "H5扫码枪手机端", description: "移动端手机浏览器H5扫码枪应用", remark: "借助手机的摄像头设备，用手机浏览器访问H5网页，该网页调用手机摄像头进行扫码识读。", images: [], 
        links: [
            { text: "H5在线扫一扫", url: "https://zkool.github.io/html/scanner/index.html" },
            { text: "H5扫码枪使用教程", url: "https://mp.weixin.qq.com/s/TAMKg-UtxGTqg3rNmBqAVg" },
        ], 
        href: "" },
    { name: "小易局域网扫码助手微信小程序", description: "移动端微信小程序扫码枪助手、盘点助手", remark: "局域网快速扫码、盘点。", images: ['images/gh_0121f90c40b6_258.jpg'], links: [{ text: "分享一款超实用的手机扫码枪小程序", url: "https://mp.weixin.qq.com/s/wdVfCmyux0yzB_PhFtPoyA" }], href: "" },
    { name: "小易扫码枪助手微信小程序", description: "移动端微信小程序扫码枪助手", remark: "便捷扫码工具", images: ['images/gh_ab61ba5034cd_258.jpg'], 
        links: [
            { text: "源码地址", url: "https://cnb.cool/yuedongmengxiang/e-scan-gun" },
            { text: "用AI写代码，挑战“一人公司”（一）", url: "https://mp.weixin.qq.com/s/SWaZWnOpmxzRSZkw8GVAOA" },
            { text: "用AI写代码，挑战“一人公司”（二）", url: "https://mp.weixin.qq.com/s/cHU3tAW3zb0Mbekn3dowPg" },
            { text: "用AI写的扫码枪助手微信小程序发布啦！", url: "https://mp.weixin.qq.com/s/GXL2EXk8VYFkPYb4_jQ7pA" },
            { text: "小易扫码枪助手小程序使用说明", url: "https://mp.weixin.qq.com/s/AE7yfgDdb0nuqTUqMS8Xnw" },

        ], href: "" },
    { name: "UDI记账本微信小程序", description: "基于药监UDI数据库识别UDI信息", remark: "医疗器械行业专用，可当UDI解析工具，也可当UDI记录（采购、销售、盘点等）工具。", images: ['images/gh_a7016ff9a052_258.jpg'], 
        links: [
            { text: "UDI数据库应用之UDI记账本小程序", url: "https://mp.weixin.qq.com/s/quY8C06mJxI7ysW3gxLZlw" },
            { text: "UDI数据库应用之UDI记账本小程序V2.0发布", url: "https://mp.weixin.qq.com/s/LQbA50Z9v6_jgfPc2XB99Q" },
        ], href: "" },
    { name: "UDI扫码助手Android版", description: "支持GS1、MA、HIBC标准的UDI解析", remark: "高效扫码，精准识别批号、效期、序列号。", images: [], 
        links: [
           { text: "安装包下载地址(豌豆荚应用市场)", url: "https://www.wandoujia.com/apps/8442398" },
           { text: "安装包下载地址(百度网盘)", url: "https://pan.baidu.com/s/1qdaodlVBz-hVom27OJcFcA?pwd=ezym" },
           { text: "看懂了这个问题，你也就知道了GS1之UDI内隐藏的秘密！", url: "https://mp.weixin.qq.com/s/z1NvTzqWX9i0WE-I-vT9CA" },
           { text: "UDI扫码神器来袭！Android端一键破解CODE128/GS1-128分隔符，精准提取GS1应用标识符！", url: "https://mp.weixin.qq.com/s/sYT4a8wh3_geTvQiP6UpfA" },
        ], href: "" },
    { name: "GS1扫码助手Android版", description: "解析GS1-CODE128应用标识符", remark: "GS1标准扫码工具，能解析出GS1所有应用标识符。", images: [], 
        links: [
           { text: "安装包下载地址(豌豆荚应用市场)", url: "https://www.wandoujia.com/apps/8442400" },
           { text: "安装包下载地址(百度网盘)", url: "https://pan.baidu.com/s/1qdaodlVBz-hVom27OJcFcA?pwd=ezym" },
           { text: "H5在线扫一扫", url: "https://zkool.github.io/html/scanner/index.html" },
           { text: "CODE128/GS1-128系列知识文章", url: "https://blog.csdn.net/cultwent/category_13039993.html" },
           { text: "你知道GS1有多少个应用标识符吗？", url: "https://mp.weixin.qq.com/s/ifBD_wxuKih6f0EB81Jpvg" },
           
        ], href: "" }
];

const favorites = [
    { name: "Java学习资源", description: "", remark: "", images: [], 
        links: [
            { text: "【转载】从三本院校到斩获字节跳动后端研发Offer-讲述我的故事", url: "https://mp.weixin.qq.com/s/c4rR_aWpmNNFGn-mZBLWYg" },
            { text: "【转载】蘑菇博客从0到2000Star，分享我的Java自学路线图", url: "https://mp.weixin.qq.com/s/0sFNF6nWMj1rJ-rOHlh5tQ" },

        ], href: "" },
    { name: "前端学习资源", description: "", remark: "", images: [], 
        links: [
            { text: "尚硅谷Vue3入门到实战，最新版vue3+TypeScript前端开发教程", url: "https://www.bilibili.com/video/BV1Za4y1r7KE" }

        ], href: "" },
    { name: "Electron学习资源", description: "", remark: "", images: [], 
        links: [
            { text: "禹神：一小时快速上手Electron，前端Electron开发教程", url: "https://www.bilibili.com/video/BV1sE421N7M5" }

        ], href: "" },
    { name: "鸿蒙学习资源", description: "", remark: "", images: [], 
        links: [
            { text: "鸿蒙开发者官网", url: "https://developer.huawei.com/consumer/cn/" },
            { text: "开发者学堂", url: "https://developer.huawei.com/consumer/cn/training/" },
            { text: "HarmonyOS第一课", url: "https://developer.huawei.com/consumer/cn/training/study-path/101667550095504391" },
            { text: "快速开发入门", url: "https://developer.huawei.com/consumer/cn/codelabsPortal/getstarted/101718800110527001" },
            { text: "开发指南", url: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide" },
            { text: "API参考", url: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-api" },
            { text: "示例代码", url: "https://developer.huawei.com/consumer/cn/samples/" },

        ], href: "" },
    { name: "面试学习资源", description: "", remark: "", images: [], 
        links: [{ text: "DDKK.COM程序员编程资料站", url: "https://www.ddkk.com" }], href: "" },
    { name: "快速开发平台", description: "", remark: "", images: [], 
        links: [
            { text: "若依管理系统", url: "http://ruoyi.vip/" },
            { text: "人人开源", url: "https://www.renren.io/" },
            { text: "PIGCLOUD", url: "https://pig4cloud.com/" },
            { text: "JeecgBoot", url: "http://jeecg.com/" },
            { text: "JeeSite", url: "https://jeesite.com/" },
            { text: "ruoyi-vue-pro", url: "https://doc.iocoder.cn/" },
        ], href: "" },
    { name: "进销存系统", description: "", remark: "", images: [], 
        links: [
            { text: "华夏ERP", url: "https://www.gyjerp.com/" },
            { text: "星云ERP", url: "https://www.lframework.com" },

        ], href: "" },
];

const projectsContainer = document.querySelector('.projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const details = document.createElement('div');
    details.className = 'project-details';
    
    details.innerHTML = `
        <p>${project.remark}</p>
        ${project.images.map(img => `<img src="${img}" alt="项目图片">`).join('')}
        ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
    `;
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = project.name;
    if (project.href) {
        nameElement.style.cursor = 'pointer';
        nameElement.setAttribute('onclick', `window.open('${project.href}', '_blank'); return false;`);
    } else {
        nameElement.style.cursor = 'default';
    }
    
    projectCard.innerHTML = '';
    projectCard.appendChild(nameElement);
    projectCard.innerHTML += `<p>${project.description}</p>`;
    projectCard.appendChild(details);
    projectsContainer.appendChild(projectCard);
});

const favoritesContainer = document.querySelector('.favorites-container');

favorites.forEach(favorite => {
    const favoriteCard = document.createElement('div');
    favoriteCard.className = 'project-card';
    
    const details = document.createElement('div');
    details.className = 'project-details';
    
    details.innerHTML = `
        <p>${favorite.remark}</p>
        ${favorite.images.map(img => `<img src="${img}" alt="项目图片">`).join('')}
        ${favorite.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join('')}
    `;
    
    const nameElement = document.createElement('h3');
    nameElement.textContent = favorite.name;
    if (favorite.href) {
        nameElement.style.cursor = 'pointer';
        nameElement.setAttribute('onclick', `window.open('${favorite.href}', '_blank'); return false;`);
    } else {
        nameElement.style.cursor = 'default';
    }
    
    favoriteCard.innerHTML = '';
    favoriteCard.appendChild(nameElement);
    favoriteCard.innerHTML += `<p>${favorite.description}</p>`;
    favoriteCard.appendChild(details);
    favoritesContainer.appendChild(favoriteCard);
});
const enable = true;

function main(config) {
    if (!enable) return config;
    set_AI_group(config);
    modify_rules(config);
    return config;
}

// 自定义规则
function modify_rules(params) {
    const rules_SCI = [
        'DOMAIN-KEYWORD,ncbi,DIRECT',
        'DOMAIN-KEYWORD,sciencedirect,DIRECT',
        'DOMAIN-KEYWORD,wustl,DIRECT',
        'DOMAIN-KEYWORD,david,DIRECT',
        'DOMAIN-KEYWORD,nature,DIRECT',
        'DOMAIN-KEYWORD,science,DIRECT',
        'DOMAIN-KEYWORD,biomedcentral,DIRECT'
    ];

    const rules_AI = [
        'DOMAIN-SUFFIX,openai.com,ChatGPT',
        'DOMAIN,gemini.google.com,ChatGPT',
        "DOMAIN-KEYWORD,cloudfare,ChatGPT",
        "DOMAIN-KEYWORD,openai,ChatGPT",
        "DOMAIN-KEYWORD,sentry,ChatGPT",
        "DOMAIN-SUFFIX,ai.com,ChatGPT",
        "DOMAIN-SUFFIX,auth0.com,ChatGPT",
        "DOMAIN-SUFFIX,challenges.cloudflare.com,ChatGPT",
        "DOMAIN-SUFFIX,client-api.arkoselabs.com,ChatGPT",
        "DOMAIN-SUFFIX,events.statsigapi.net,ChatGPT",
        "DOMAIN-SUFFIX,featuregates.org,ChatGPT",
        "DOMAIN-SUFFIX,identrust.com,ChatGPT",
        "DOMAIN-SUFFIX,ingest.sentry.io,ChatGPT",
        "DOMAIN-SUFFIX,intercom.io,ChatGPT",
        "DOMAIN-SUFFIX,intercomcdn.com,ChatGPT",
        "DOMAIN-SUFFIX,openaiapi-site.azureedge.net,ChatGPT",
        "DOMAIN-SUFFIX,stripe.com,ChatGPT"
    ];

    const rules_daily = [
        'DOMAIN-KEYWORD,keke1,DIRECT',
    ];

    params.rules = rules_SCI.concat(rules_AI, rules_daily, params.rules);
}

// AI组配置
function set_AI_group(params) {

    // 排除的关键字，忽略大小写
    const mustNotHaveKeywords = [
        '香港', 'HK', 'HongKong', '日本', 'Japan', 'JP', '台湾', 'Taiwan', 'TW',
        "剩余", "到期", "主页", "官网", "游戏", "关注", "网站", "地址", "有效", "网址", "禁止", 
        '实验性',"邮箱", "发布", "客服", "订阅", "节点", "问题", "联系"
    ];

    // 构造排除关键字的正则表达式
    const regex = new RegExp(`^(?!.*(${mustNotHaveKeywords.join('|')})).*$`, 'i');

    // 过滤掉名称包含排除关键字的代理节点
    const proxies = params.proxies
        .filter(i => regex.test(i.name))  // 保留不包含排除关键字的代理
        .map(e => e.name);  // 提取代理节点名称

    const groups = params["proxy-groups"];

    // 检查是否已经有名为 "ChatGPT" 的代理组，避免重复添加
    if (!groups.some(group => group.name === "ChatGPT")) {
        const newGroup = createGroup("ChatGPT", "select", proxies);  // 创建新的 ChatGPT 组
        groups.unshift(newGroup); // 将新组插入到第一个位置
    }

    return params;
}

// 创建代理组
function createGroup(name, type, proxies) {
    return { name: name, type: type, proxies };
}

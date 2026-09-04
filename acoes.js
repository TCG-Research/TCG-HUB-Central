// Fundamentos das companhias (Comps Table 04/09/2026 (Rumo/GPS/Embraer atualizados)). Valores em R$ milhões; ações em milhões.
// O preço vem ao vivo (precos.js / Yahoo). Multiplos calculados no hub:
//   Market Cap   = preco * acoes
//   P/E (ano)    = Market Cap / lucro_liquido (ano)
//   EV           = Market Cap + Div.Liquida 2026 + Minoritarios   (EV usa SEMPRE a div.liq. de 2026)
//   EV/EBITDA(ano) = EV / EBITDA (ano)
// preco_ref = preço da tabela (fallback se o feed de preço falhar). moeda p/ exibicao.
window.ACOES = {
  meta: { atualizado: "2026-09-04", obs: "R$ mm; ações mm; EV usa Dív.Líq. 2026 + minoritários" },
  setores: ["Rental", "Logística", "Aviação", "Auto Parts", "Capital Goods", "Serviços"],
  empresas: [
    // --- Rental ---
    { ticker:"RENT3", nome:"Localiza", setor:"Rental", yahoo:"RENT3.SA", moeda:"BRL", acoes:1105, preco_ref:34.49, ll26:4286, ll27:4629, ebitda26:15627, ebitda27:16418, divliq26:33618, divliq27:32862, minor:0 },
    { ticker:"MOVI3", nome:"Movida", setor:"Rental", yahoo:"MOVI3.SA", moeda:"BRL", acoes:401, preco_ref:6.83, ll26:550, ll27:704, ebitda26:6493, ebitda27:6896, divliq26:14136, divliq27:13204, minor:0 },
    { ticker:"VAMO3", nome:"Vamos", setor:"Rental", yahoo:"VAMO3.SA", moeda:"BRL", acoes:1222, preco_ref:2.8, ll26:461, ll27:701, ebitda26:3893, ebitda27:4146, divliq26:12140, divliq27:12085, minor:0 },
    { ticker:"ARML3", nome:"Armac", setor:"Rental", yahoo:"ARML3.SA", moeda:"BRL", acoes:346, preco_ref:2.7, ll26:179, ll27:273, ebitda26:880, ebitda27:964, divliq26:2220, divliq27:1838, minor:0 },
    // --- Logística ---
    { ticker:"RAIL3", nome:"Rumo", setor:"Logística", yahoo:"RAIL3.SA", moeda:"BRL", acoes:1856, preco_ref:13.05, ll26:1926, ll27:2587, ebitda26:8160, ebitda27:9027, divliq26:18012, divliq27:19575, minor:0 },
    { ticker:"HBSA3", nome:"Hidrovias do Brasil", setor:"Logística", yahoo:"HBSA3.SA", moeda:"BRL", acoes:1360, preco_ref:3.2, ll26:360, ll27:560, ebitda26:1142, ebitda27:1418, divliq26:1622, divliq27:1049, minor:0 },
    { ticker:"ECOR3", nome:"Ecorodovias", setor:"Logística", yahoo:"ECOR3.SA", moeda:"BRL", acoes:696, preco_ref:6.14, ll26:516, ll27:464, ebitda26:5577, ebitda27:5945, divliq26:24174, divliq27:27172, minor:0 },
    { ticker:"JSLG3", nome:"JSL", setor:"Logística", yahoo:"JSLG3.SA", moeda:"BRL", acoes:286, preco_ref:4.78, ll26:82, ll27:249, ebitda26:1879, ebitda27:2364, divliq26:7348, divliq27:6911, minor:0 },
    { ticker:"TGMA3", nome:"Tegma", setor:"Logística", yahoo:"TGMA3.SA", moeda:"BRL", acoes:66, preco_ref:33.45, ll26:267, ll27:280, ebitda26:419, ebitda27:436, divliq26:-133, divliq27:-161, minor:0 },
    // --- Aviação ---
    { ticker:"LTM", nome:"Latam Airlines", setor:"Aviação", yahoo:"LTM", moeda:"USD", acoes:287, preco_ref:52.6, ll26:1834, ll27:1800, ebitda26:4728, ebitda27:4903, divliq26:5199, divliq27:4384, minor:0 },
    { ticker:"EMBJ", nome:"Embraer", setor:"Aviação", yahoo:"EMBJ", moeda:"USD", acoes:181, preco_ref:74.53, ll26:633, ll27:790, ebitda26:1153, ebitda27:1298, divliq26:-226, divliq27:-510, minor:0 },
    // --- Auto Parts ---
    { ticker:"LEVE3", nome:"Mahle Metal Leve", setor:"Auto Parts", yahoo:"LEVE3.SA", moeda:"BRL", acoes:136, preco_ref:31.39, ll26:624, ll27:696, ebitda26:1148, ebitda27:1211, divliq26:428, divliq27:431, minor:0 },
    { ticker:"MYPK3", nome:"Iochpe-Maxion", setor:"Auto Parts", yahoo:"MYPK3.SA", moeda:"BRL", acoes:154, preco_ref:9.07, ll26:269, ll27:332, ebitda26:1688, ebitda27:1820, divliq26:3521, divliq27:3634, minor:1973 },
    { ticker:"TUPY3", nome:"Tupy", setor:"Auto Parts", yahoo:"TUPY3.SA", moeda:"BRL", acoes:135, preco_ref:14.58, ll26:339, ll27:455, ebitda26:1158, ebitda27:1323, divliq26:2374, divliq27:2228, minor:0 },
    { ticker:"RAPT4", nome:"Randon", setor:"Auto Parts", yahoo:"RAPT4.SA", moeda:"BRL", acoes:349, preco_ref:4.71, ll26:104, ll27:357, ebitda26:1754, ebitda27:2084, divliq26:4160, divliq27:4354, minor:3437 },
    { ticker:"POMO4", nome:"Marcopolo", setor:"Auto Parts", yahoo:"POMO4.SA", moeda:"BRL", acoes:1241, preco_ref:4.31, ll26:1122, ll27:1140, ebitda26:1442, ebitda27:1550, divliq26:1350, divliq27:1149, minor:0 },
    { ticker:"FRAS3", nome:"Fras-le", setor:"Auto Parts", yahoo:"FRAS3.SA", moeda:"BRL", acoes:267, preco_ref:21.55, ll26:368, ll27:483, ebitda26:1059, ebitda27:1175, divliq26:1684, divliq27:1666, minor:0 },
    // --- Capital Goods ---
    { ticker:"WEGE3", nome:"WEG", setor:"Capital Goods", yahoo:"WEGE3.SA", moeda:"BRL", acoes:4196, preco_ref:47.62, ll26:6403, ll27:7265, ebitda26:9027, ebitda27:10305, divliq26:-4027, divliq27:-6350, minor:0 },
    // --- Serviços ---
    { ticker:"GGPS3", nome:"GPS", setor:"Serviços", yahoo:"GGPS3.SA", moeda:"BRL", acoes:752, preco_ref:11.2, ll26:854, ll27:1019, ebitda26:2239, ebitda27:2222, divliq26:2377, divliq27:2083, minor:0 },
    { ticker:"PRNR3", nome:"Priner", setor:"Serviços", yahoo:"PRNR3.SA", moeda:"BRL", acoes:57, preco_ref:16.72, ll26:80, ll27:135, ebitda26:370, ebitda27:446, divliq26:640, divliq27:648, minor:0 },
  ],
};

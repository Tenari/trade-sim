function getRandomDataURL() {
  var daysToView = 400
    , startDate = newDate()
    , endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + daysToView);

  ticker = stock();

  var input_url = "http://query.yahooapis.com/v1/public/yql"+
      "?q=select%20*%20from%20yahoo.finance.historicaldata%20"+
      "where%20symbol%20%3D%20%22"
      +ticker+"%22%20and%20startDate%20%3D%20%22"
      +formatDate(startDate)+"%22%20and%20endDate%20%3D%20%22"
      +formatDate(endDate)+"%22&format=json&env=store%3A%2F%2F"
      +"datatables.org%2Falltableswithkeys&callback=appendToData";

  // returns a random start date between now-daysToView and 2000-01-01
  function newDate() {
    var start = new Date(2000,0,1)
      , end = new Date();

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()) - daysToView*24*60*60*1000);
  }

  // returns a random TICKER from a list
  function stock(){
    var stocks = "ABT,ABBV,ACE,ACN,ACT,ADBE,ADT,AES,AET,AFL,AMG,A,GAS,APD,ARG,AKAM,AA,ALXN,ATI,AGN,ADS,ALL,ALTR,MO,AMZN,AEE,AEP,AXP,AIG,AMT,AMP,ABC,AME,AMGN,APH,APC,ADI,AON,APA,AIV,AAPL,AMAT,ADM,AIZ,T,ADSK,ADP,AN,AZO,AVGO,AVB,AVY,AVP,BHI,BLL,BAC,BK,BCR,BAX,BBT,BDX,BBBY,BMS,BRK.B,BBY,BIIB,BLK,HRB,BA,BWA,BXP,BSX,BMY,BRCM,BF.B,CHRW,CA,CVC,COG,CAM,CPB,COF,CAH,CFN,KMX,CCL,CAT,CBG,CBS,CELG,CNP,CTL,CERN,CF,SCHW,CHK,CVX,CMG,CB,CI,XEC,CINF,CTAS,CSCO,C,CTXS,CLX,CME,CMS,COH,KO,CCE,CTSH,CL,CMCSA,CMA,CSC,CAG,COP,CNX,ED,STZ,GLW,COST,COV,CCI,CSX,CMI,CVS,DHI,DHR,DRI,DVA,DE,DLPH,DAL,DNR,XRAY,DVN,DO,DTV,DFS,DISCA,DISCK,DG,DLTR,D,DOV,DOW,DPS,DTE,DD,DUK,DNB,ETFC,EMN,ETN,EBAY,ECL,EIX,EW,EA,EMC,EMR,ESV,ETR,EOG,EQT,EFX,EQR,ESS,EL,EXC,EXPE,EXPD,ESRX,XOM,FFIV,FB,FDO,FAST,FDX,FIS,FITB,FSLR,FE,FISV,FLIR,FLS,FLR,FMC,FTI,F,FOSL,BEN,FCX,FTR,GME,GCI,GPS,GRMN,GD,GE,GGP,GIS,GM,GPC,GNW,GILD,GS,GT,GOOGL,GWW,HAL,HOG,HAR,HRS,HIG,HAS,HCP,HCN,HP,HES,HPQ,HD,HON,HRL,HSP,HST,HCBK,HUM,HBAN,ITW,IR,TEG,INTC,ICE,IBM,IP,IPG,IFF,INTU,ISRG,IVZ,IRM,JBL,JEC,JNJ,JCI,JOY,JPM,JNPR,KSU,K,KEY,GMCR,KMB,KIM,KMI,KLAC,KSS,KRFT,KR,LB,LLL,LH,LRCX,LM,LEG,LEN,LUK,LLY,LNC,LLTC,LMT,L,LO,LOW,LYB,MTB,MAC,M,MMM,MRO,MPC,MAR,MMC,MAS,MA,MAT,MKC,MCD,MHFI,MCK,MJN,MWV,MDT,MRK,MET,MCHP,MU,MSFT,MHK,TAP,MDLZ,MON,MNST,MCO,MS,MOS,MSI,MUR,MYL,NBR,NDAQ,NOV,NTAP,NFLX,NWL,NFX,NEM,NWSA,NEE,NLSN,NKE,NI,NE,NBL,JWN,NSC,NTRS,NOC,NU,NRG,NUE,NVDA,KORS,ORLY,OXY,OMC,OKE,ORCL,OI,PCG,PCAR,PLL,PH,PDCO,PAYX,BTU,PNR,PBCT,POM,PEP,PKI,PRGO,PETM,PFE,PM,PSX,PNW,PXD,PBI,PCL,PNC,RL,PPG,PPL,PX,PCP,PCLN,PFG,PG,PGR,PLD,PRU,PEG,PSA,PHM,PVH,QEP,PWR,QCOM,DGX,RRC,RTN,RHT,REGN,RF,RSG,RAI,RHI,ROK,COL,ROP,ROST,RDC,R,SWY,CRM,SNDK,SCG,SLB,SNI,STX,SEE,SRE,SHW,SIAL,SPG,SJM,SNA,SO,LUV,SWN,SE,STJ,SWK,SPLS,SBUX,HOT,STT,SRCL,SYK,STI,SYMC,SYY,TROW,TGT,TEL,TE,THC,TDC,TSO,TXN,TXT,HSY,TRV,TMO,TIF,TWX,TWC,TJX,TMK,TSS,TSCO,RIG,TRIP,FOXA,TSN,TYC,USB,UA,UNP,UNH,UPS,MLM,UTX,UNM,URBN,VFC,VLO,VAR,VTR,VRSN,VZ,VRTX,VIAB,V,VNO,VMC,WMT,WAG,DIS,GHC,WM,WAT,WLP,WFC,WDC,WU,WY,WHR,WFM,WMB,WIN,WEC,WYN,WYNN,XEL,XRX,XLNX,XL,XYL,YHOO,YUM,ZMH,ZION,ZTS,SPY,GLD,QQQ,NNN,DIA,KBE,UUP,SH".split(',');
    return stocks[parseInt(Math.random()*stocks.length)];
  }

  function formatDate(date){
    var month = date.getMonth()+1, day = date.getDate();
    if (day < 10)
      day = '0'+day;
    if (month < 10)
      month = '0'+month;
    return ""+date.getFullYear()+'-'+month+'-'+day;
  }
  return input_url;
}

var width = 900
  , height = 500
  , stop = 0
  , data = [], intital = [], subsequent = [], split_index = 90, open_trade = null, ticker = '', in_trade = false;

function min(a, b){ return a < b ? a : b ; }
             
function max(a, b){ return a > b ? a : b; }    

function buildChart(data){
  $('#chart').html('');
     
  var margin = 50;       
  
  var chart = d3.select("#chart")
    .append("svg:svg")
    .attr("class", "chart")
    .attr("width", width)
    .attr("height", height);

  var y = d3.scale.linear()
    .domain([d3.min(data.map(function(x) {return x["Low"];})), d3.max(data.map(function(x){return x["High"];}))])
    .range([height-margin, margin]);
  var x = d3.scale.linear()
    .domain([d3.min(data.map(function(d){return d.timestamp;})), d3.max(data.map(function(d){ return d.timestamp;}))])
    .range([margin,width-margin]);
  var tooltip = d3.select("#chart").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

  chart.selectAll("line.x")
   .data(x.ticks(10))
   .enter().append("svg:line")
   .attr("class", "x")
   .attr("x1", x)
   .attr("x2", x)
   .attr("y1", margin)
   .attr("y2", height - margin)
   .attr("stroke", "#ccc");

  chart.selectAll("line.y")
   .data(y.ticks(10))
   .enter().append("svg:line")
   .attr("class", "y")
   .attr("x1", margin)
   .attr("x2", width - margin)
   .attr("y1", y)
   .attr("y2", y)
   .attr("stroke", "#ccc");

/*  chart.selectAll("text.xrule") // draws the x axis labels
   .data(x.ticks(10))
   .enter().append("svg:text")
   .attr("class", "xrule")
   .attr("x", x)
   .attr("y", height - margin)
   .attr("dy", 20)
   .attr("text-anchor", "middle")
   .text(function(d){ var date = new Date(d * 1000);  return (date.getMonth() + 1)+"/"+date.getDate(); }); */

  chart.selectAll("text.yrule")
   .data(y.ticks(10))
   .enter().append("svg:text")
   .attr("class", "yrule")
   .attr("x", width - margin)
   .attr("y", y)
   .attr("dy", 0)
   .attr("dx", 20)    
   .attr("text-anchor", "middle")
   .text(String);

  chart.selectAll("rect")
    .data(data)
    .enter().append("svg:rect")
    .attr("x", function(d) { return x(d.timestamp); })
    .attr("y", function(d) {return y(max(d.Open, d.Close));})     
    .attr("height", function(d) { return y(min(d.Open, d.Close))-y(max(d.Open, d.Close));})
    .attr("width", function(d) { return 0.5 * (width - 2*margin)/data.length; })
    .attr("fill",function(d) { return d.Open > d.Close ? "red" : "green" ;})
    .on("mouseover", function(d) {      
      tooltip.transition()        
        .duration(100)
        .style("opacity", .9);
      tooltip.html("high,low,open,close<br/>"+d.High+","+d.Low+","+d.Open+","+d.Close)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
    })                  
    .on("mouseout", function(d) {
      tooltip.transition()
        .duration(100)
        .style("opacity", 0);
    })
    ;

  chart.selectAll("line.stem")
    .data(data)
    .enter().append("svg:line")
    .attr("class", "stem")
    .attr("x1", function(d) { return x(d.timestamp) + 0.25 * (width - 2 * margin)/ data.length;})
    .attr("x2", function(d) { return x(d.timestamp) + 0.25 * (width - 2 * margin)/ data.length;})       
    .attr("y1", function(d) { return y(d.High);})
    .attr("y2", function(d) { return y(d.Low); })
    .attr("stroke", function(d){ return d.Open > d.Close ? "red" : "green"; })
}     

window.appendToData = function(x){
  split_index = 130;
  try {
    data = x.query.results.quote;
    for(var i=0;i<data.length;i++){
      data[i].timestamp = (new Date(data[i].Date).getTime() / 1000);
    }     
    data = data.sort(function(x, y){ return x.timestamp - y.timestamp; });      
    initial = data.slice(0,split_index);
    subsequent = data.slice(split_index);
    buildChart(initial);     
  } catch(e){
    alert('bad response');
  }
}

/*
function buildQuery(){
  var symbol = window.location.hash;
  if(symbol === ""){
     symbol = "AMZN";
  }
  symbol = symbol.replace("#", "");     
  var base = "select * from yahoo.finance.historicaldata where symbol = \"{0}\" and startDate = \"{1}\" and endDate = \"{2}\"";
  var getDateString = d3.time.format("%Y-%m-%d");
  var query = base.format(symbol, getDateString(start), getDateString(end));
  query = encodeURIComponent(query);        
  var url = "http://query.yahooapis.com/v1/public/yql?q={0}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=appendToData".format(query);
  return url;
}

*/
function fetchData(){
  url = getRandomDataURL();//buildQuery();     
  scriptElement = document.createElement("SCRIPT");
  scriptElement.type = "text/javascript";
  // i add to the url the call back function
  scriptElement.src = url;
  document.getElementsByTagName("HEAD")[0].appendChild(scriptElement);
}

/* trading logic */
function enter(direction) {
  Session.set('open_trade', Trades.insert({
    entry: data[split_index].Open,
    exit: null,
    totalDays: 0,
    startDate: data[split_index].timestamp,
    start: split_index,
    direction: direction,
    createdAt: Date.now(),
    ticker: ticker,
    stop: stop, //initial stop location, which implies R
  }));
  in_trade = true;
  next();
}
function buy(){ enter('up'); }
function sell(){ enter('down'); }
function next(){
  split_index += 1;
  // charting
  initial = data.slice(0, split_index);
  subsequent = data.slice(split_index);
  buildChart(initial);

  if(in_trade == false) return;
  // trade stop tracking
  var tr = Trades.findOne(Session.get('open_trade'))
    , today = data[split_index-1];
  if(tr.direction == 'up') {
    if (today.Low <= stop) { // we got stopped out down
      alert('stopped out');
      in_trade = false;
      if (stop < today.High) // we are able to get the stop
        Trades.update(Session.get('open_trade'), {$set: {exit: stop, totalDays: split_index - tr.start }});
      else 
        Trades.update(Session.get('open_trade'), {$set: {exit: today.Open, totalDays: split_index - tr.start }});
      stop = 0;
    }
  } else {
    if (today.High >= stop) { // we got stopped out up (we were short)
      alert('stopped out');
      in_trade = false;
      if (stop > today.Low) // we are able to get the stop
        Trades.update(Session.get('open_trade'), {$set: {exit: stop, totalDays: split_index - tr.start }});
      else 
        Trades.update(Session.get('open_trade'), {$set: {exit: today.Open, totalDays: split_index - tr.start }});
      stop = 0;
    }
  }
}
function close(){
  var tr = Trades.findOne(Session.get('open_trade'));
  Trades.update(Session.get('open_trade'), {$set: {exit: data[split_index-1].Close, totalDays: split_index - tr.start }});
  stop = 0;
  in_trade = false;
}
function net(obj){
  return (obj.direction == 'up' ? obj.exit - obj.entry : obj.entry - obj.exit).toFixed(2);
}
function rCalc(obj){
  if (obj.direction == 'up')
    return ((obj.exit - obj.entry)/(obj.entry - obj.stop)).toFixed(2);
  else
    return ((obj.entry - obj.exit)/(obj.stop - obj.entry)).toFixed(2);
}
function capital_using_R(){ // assumes 1% capital risked on each trade
    var capital = 10000
      , risk = 0.01
      , trades = Trades.find({},{sort: {createdAt: 1}}).fetch();
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      var oneR = (capital*risk)
        , shares = oneR / Math.abs(trade.entry - trade.stop)
        , capital_cost = shares * trade.entry;
      if (capital_cost > 2*capital) // don't do impossible things
        shares = capital / trade.entry;
      capital += shares * net(trade);
    });
    return parseInt(capital);
  }
window.exportTrades = function (){
  var array = Trades.find({},{sort: {createdAt: 1}}).fetch();
  var str = '_id,createdAt,direction,entry,exit,startIndex,startDate,stop,ticker,totalDays\r\n';

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if(line != '') line += ','
      line += array[i][index];
    }
    str += line + '\r\n';
  }

  var popup = window.open('','csv','');
  popup.document.body.innerHTML = '<pre>' + str + '</pre>';
}

/* METEOR logic */
Template.main.helpers({
  trades: function(){
    return Trades.find({},{sort: {createdAt: -1}});
  },
  net: net,
  percent: function(obj) {
    return ((net(obj) / obj.entry)*100).toFixed(2);
  },
  total_gain: function(){ // assumes 100% capital on each trade
    var capital = 10000
      , trades = Trades.find({},{sort: {createdAt: 1}}).fetch();
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      var shares = capital / trade.entry;
      capital += shares * net(trade);
    });
    return parseInt(capital);
  },
  total_using_R: capital_using_R,
  avg_trade_length: function(){
    var total = 0
      , trades = Trades.find().fetch();
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      total += trade.totalDays;
    });
    return (total / trades.length).toFixed(2);
  },
  positive_style: function(obj){
    return net(obj) > 0 ? 'positive' : 'negative';
  },
  r: rCalc,
  total_trades: function(){ return Trades.find().count();},
  stop: function() { return stop; },
});
Template.main.events({
  'click #get-chart' : fetchData,
  'click #buy' : buy,
  'click #short' : sell,
  'click #next' : next,
  'click #close' : close,
  'click #view-stats': function(){Session.set('stats',true);},
  'click #show-r': function(){
    var tr = Trades.findOne(Session.get('open_trade'));
    var r = tr.direction == 'up' ? ((data[split_index-1].Close - tr.entry)/(tr.entry - tr.stop)) : ((tr.entry - data[split_index-1].Close)/(tr.stop-tr.entry));
    alert('R: '+r);
  },
  'click #help' : function(){
    alert('You must input your stop before entering a trade, either up or down. It will reset to 0 when you are either stopped out or manually close the trade.');
  },
  'keypress #stop': function(e){
    setTimeout(function(){
      stop = parseFloat($(e.target).val());
    },99);
  }
});
Template.switcher.helpers({
  isStats: function(){
    return Session.get('stats');
  }
});
Template.stats.helpers({
  avg_win: function() {
    var trades = Trades.find({},{sort: {createdAt: 1}}).fetch(), total = 0, count = 0;
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      if(net(trade) > 0) {
        total += parseFloat(rCalc(trade));
        count += 1;
      }
    });
    return (total/count).toFixed(2);
  },
  avg_loss: function() {
    var trades = Trades.find({},{sort: {createdAt: 1}}).fetch(), total = 0, count = 0;
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      if(net(trade) <= 0) {
        total += parseFloat(rCalc(trade));
        count += 1;
      }
    });
    return (total/count).toFixed(2);
  },
  win_count: function() {
    var trades = Trades.find({},{sort: {createdAt: 1}}).fetch(), count = 0;
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      if(net(trade) > 0)
        count += 1;
    });
    return count;
  },
  loss_count: function() {
    var trades = Trades.find({},{sort: {createdAt: 1}}).fetch(), count = 0;
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      if(net(trade) <= 0)
        count += 1;
    });
    return count;
  },
  capital: capital_using_R,
  expectancy: function(){
    var trades = Trades.find({},{sort: {createdAt: 1}}).fetch(), count = 0, total = 0;
    _.each(trades, function(trade){
      if(trade.exit == null) return;
      total += parseFloat(rCalc(trade));
      count += 1;
    });
    return (total/count).toFixed(2);
  }
});
Template.stats.events({
  'click #play': function(){Session.set('stats',undefined);}
});

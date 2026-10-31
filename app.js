const costumes=[
 ['Лунная ведьма','🌙','Лучше замечает лунные метки.'],['Хранительница вампирского замка','🦇','Читает старые гербы и печати.'],['Исследовательница призраков','👻','Слышит тихие подсказки призраков.'],['Тыквенная волшебница','🎃','Находит общий язык с тыквами.'],['Готическая алхимик','⚗️','Разбирается в загадочных смесях.']
];
const cast=[
 ['Паша','«Ёбар»','🎧','Клуб'],['Егор','Москва','♜','Красная площадь'],
 ['Алёна','Политех','🏛️','Политехнический университет'],['Витя','iMall','🛍️','Вход в iMall'],
 ['Юля','iMall','🌿','Зимний сад iMall'],['Кира','Здание','☾','Старое здание'],
 ['Максим','Китайская беседка','🏮','Китайская беседка'],['Даша','Дом','🏠','Дом Даши'],
 ['Никита','Отель','🏨','Holiday Inn'],['Тыква Джек','Тыквенное поле','🎃','Поле за городом']
];
const ends=[
 ['Огни домой','Все фонари зажигаются по очереди и ведут друзей в Пермь. Джек остаётся на своей грядке.','Волшебная'],['Праздник тыкв','Тыквы встречают Джека оркестром. Варя и ребята танцуют и уходят с корзиной пирогов.','Весёлая'],['Лунная тропа','Серебряный знак показывает дорогу домой. Джек машет Варе кленовым листочком.','Мистическая'],['Тихая тропа','Лунный свет выводит всех из тумана. Джек остаётся на своей грядке, а друзья возвращаются домой.','Милая'],['Тёплый чай на финише','Даша достаёт термос. Город возвращается на место, пока друзья пьют чай у поля.','Уютная'],['Большой концерт','Паша включает музыку, тыквы подпевают, а Джек дирижирует ботвой.','Смешная'],['Чужая грядка','Варя приводит Джека к звезде, но звезда оказывается подделкой. Джек остаётся вне своего дома, и улицы Перми навсегда меняются местами. Варя цела и находится с друзьями, но прежний город уже не вернуть.','Тревожная · Джек не дошёл'],['Ложный выход','Ворота открываются на пермскую улицу, которой никогда не было. Джек теряется среди одинаковых огней; Варя успевает вернуться к Даше, где ей ничто не угрожает. За окном город остаётся чужим.','Мрачная · Джек потерялся'],['Светлячки Алёны','Формула Алёны зажигает над полем светлячков. Они провожают Джека к его грядке.','Чудесная'],['Общий снимок','Алёна снимает друзей рядом с Джеком, который наконец стоит дома.','Милая'],['Кино под звёздами','Юля устраивает короткий фильм из теней и листьев. В титрах Джек благодарит всю команду.','Трогательная'],['Колокольчик Максима','Колокольчик звенит — поле отвечает золотым сиянием и показывает путь к Перми.','Тихая'],['Лист Юли','Кленовый лист Юли становится компасом для друзей и указывает Джеку путь к его грядке.','Волшебная'],['Тыквенный гнев','Джек понимает, что его долго водили по ложным тропам, и в ярости разрушает границу ночи. Мир вокруг рассыпается на пылающие кусочки, а Варю защищает свет её фонаря. С ней всё хорошо, но мир уничтожен.','Страшная · мир разрушен'],['Золотой листопад','Золотые листья зажигают каждую тыкву и образуют светлый навес до города.','Праздничная'],['Хранительница грядки','Джек назначает Варю почётной хранительницей поля. Она обещает навещать его осенью.','Добрая'],['Алхимический перебор','После возвращения Джека на грядку Варя просыпается у туалета: её рвёт от собственных зелий. Даша приносит воды, друзья помогают ей прийти в себя. К утру Варя уже смеётся: кажется, алхимические опыты на Хэллоуин удались слишком хорошо.','Секретная · смешная · только алхимик'],['Ночь без рассвета','Джек не находит свою грядку до рассвета. Хэллоуинская ночь остаётся над городом навсегда. Варя спокойно живёт с друзьями в освещённом доме Даши, но снаружи солнце больше не появляется.','Тревожная · вечная ночь'],['Поле исчезает','Варя добирается до нужного места слишком поздно: поле исчезает из-под ног Джека. Он остаётся между городом и ночью. Варя в безопасности рядом с друзьями, а тыквенные фонари теперь светят без хозяина.','Мистическая · Джек не вернулся'],['Это был сон','Варя помогает Джеку вернуться на грядку и просыпается дома. Вечером друзья зовут её на Хэллоуин.','Сонная, но счастливая'],['Последний огонь','Джек принимает ложный фонарь за свой и сердится. От его крика исчезают мосты и площади. Варя и её друзья успевают укрыться в доме Даши; они целы, но Пермь уже не станет прежней.','Страшная · город разрушен']
];
const darkEndings=[6,7,13,17,18,20];
const brightEndings=[0,1,2,3,4,5,8,9,10,11,12,14,15,19];
let s={screen:'home',outfit:null,n:0,q:0,trust:0,clues:0,light:0,warm:0,picks:[],flags:{},reaction:''};
const app=document.querySelector('#app'),progress=document.querySelector('#progress');
function img(file,icon,label){return '<figure class="photo-card"><div class="photo"><span class="emoji">'+icon+'</span><img src="./assets/'+file+'" alt="'+label+'" onerror="this.remove()"></div><figcaption class="caption">'+label+'</figcaption></figure>'}
function status(){progress.textContent=s.screen==='talk'?'Встреча '+(s.n+1)+' из 10 · вопрос '+(s.q+1)+' / 5':s.screen==='ending'?'Концовка  ·  '+s.picks.length+' решений':s.screen==='intro'?'Пермь · полночь':''}
function render(){status();if(s.screen==='home'){app.innerHTML='<section class="screen hero"><div><div class="eyebrow">Интерактивное хэллоуинское приключение</div><h1>Ночь<br>в <em>Перми</em></h1><p>Варя просыпается в родном городе. Улицы знакомы, но фонари светят странным огнём, а прохожие знают то, чего знать не должны. Найди друзей, разгадай тайну и верни Джека домой.</p><button class="primary" data-go="choose">Начать игру →</button></div><div class="hero-art"><span class="emoji">🧙🏻‍♀️</span></div></section>';return}
if(s.screen==='choose'){app.innerHTML='<section class="screen"><header class="head"><div class="eyebrow">Сначала выбери образ Вари</div><h1>Кем ты выйдешь в ночь?</h1><p>У каждого образа свой талант. Все пути ведут к разгадке.</p></header><div class="costumes">'+costumes.map((x,i)=>'<button class="costume '+(s.outfit===i?'selected':'')+'" data-outfit="'+i+'"><div class="cost-img"><span>'+x[1]+'</span><img src="./assets/costume-'+(i+1)+'.jpg" alt="" onerror="this.remove()"></div><div class="cost-name">'+x[0]+'</div></button>').join('')+'</div><div class="row"><span class="hint">'+(s.outfit===null?'Выбери фотографию и название под ней':costumes[s.outfit][2])+'</span><button class="primary" data-go="intro" '+(s.outfit===null?'disabled':'')+'>Проснуться в Перми →</button></div></section>';return}
if(s.screen==='intro'){app.innerHTML='<section class="screen intro"><div class="copy"><div class="eyebrow">Пермь · полночь</div><h1>Город узнал Варю.<br>Но стал другим.</h1><p>Варя открывает глаза на пустой площади. Ветер гонит листья, а в фонарях мерцает тыквенное пламя. На телефоне одно сообщение: «Найди Джека. И не верь первой дороге».</p><p>Впереди десять встреч. Варя задаст каждому пять вопросов, услышит его историю и выберет, что делать дальше. Каждый поступок отзовётся позже.</p><button class="primary" data-go="talk">Осмотреться →</button></div>'+img('perm.jpg','🌕','Пермь · место, где начинается история')+'</section>';return}
if(s.screen==='talk'){talk();return}if(s.screen==='ending'){ending()}}
function openingLine(){
 const base=STORY[s.n].opening;
 const light=s.flags.lantern;
 const byLight=[
  '',
  light?'Егор добавляет: «Отличный выбор, ты взяла фонарь. В нём так удобно видеть дорогу». Он на секунду следит только за светом.':'Егор замечает, что у Вари нет фонаря: «Значит, придётся больше смотреть на карту».',
  light?'Алёна рассматривает фонарь: «У тебя есть собственный свет. Им можно проверить снимки».':'Алёна включает вспышку телефона: «Без фонаря придётся искать свет иначе».',
  light?'Витя бросает взгляд на фонарь: «С ним в торговом центре точно не заблудишься».':'Витя замечает пустые руки Вари: «Внутри я покажу, где взять свет».',
  light?'Юля тихо говорит: «У воды твой фонарь светит ровно, а некоторые чужие огни дрожат».':'Юля показывает отражение фонтана: «Вода тоже умеет подсвечивать ложный поворот».',
  light?'Кира ласково советует прикрыть фонарь рукой: «Здесь не любят яркий свет».':'Кира предлагает старую свечу, но Варя сначала осматривает дом.',
  light?'Максим узнаёт свет Пашиного фонаря на полях книги.':'Максим ищет в книге другой способ прочитать метки без фонаря.',
  light?'Даша ставит фонарь рядом с чайником: его пламя не отражается в окне.':'Даша зажигает свою свечу-тыкву, чтобы Варя видела дорогу.',
  light?'Никита говорит: «С фонарём тебе не нужен мой ключ. Но я всё равно покажу этаж».':'Никита протягивает свой фонарь и предлагает идти за ним.',
  light?'Джек узнаёт фонарь Паши: «Он всё время пытался показать тебе мою грядку».':'Джек замечает, что Варя пришла без фонаря, и указывает на свой собственный огонёк.'
 ];
 const continuity=s.n===2&&s.flags.egorMap?'Алёна замечает карту Егора: линии на ней двоятся.':s.n===4&&s.flags.callYulia?'Юля подтверждает: она не отвечала на тот зов.':s.n===6&&s.flags.compareButton?'Максим узнаёт на пуговице Киры перевёрнутую метку.':s.n===7&&s.flags.dashaSteps?'Даша услышала, как Варя шла на её голос из здания.':s.n===8&&s.flags.hotelAlert?'Никита знает, что Алёна проверяла лифт, и меняет тему.':s.n===9&&s.flags.starSketch?'Джек радуется звезде в дневнике Вари: «Это моя табличка!»':'';
 const potion=s.outfit===4&&s.flags.potionFirst?(s.n===7?'Даша замечает, что после собственных зелий Варя выглядит бледнее обычного, и предлагает ей воды.':s.n===9?'Джек прищуривается: «Твой алхимический огонёк сегодня как-то странно двоится».':''):'';
 const warning=s.n===9&&dangerScore()>=14?'Вокруг Джека мерцают похожие грядки: старые решения сбили путь, и теперь нельзя ошибиться со звездой.':'';
 return base+' '+(byLight[s.n]||'')+' '+continuity+' '+potion+' '+warning;
}
function currentBeat(){
 const original=STORY[s.n].beats[s.q];
 const beat=[original[0],original[1],[...original[2]],[...original[3]],[...original[4]]];
 if(s.outfit===4&&s.n===2&&s.q===2){
  beat[2][0]='Выпить своё первое зелье ясности и проверить формулу';
  beat[3][0]='potionFirst';
  beat[4][0]='Варя выпивает собственное зелье. Схема становится яснее, но пол под ногами слегка качается.';
 }
 if(s.outfit===4&&s.n===6&&s.q===1){
  beat[2][0]='Выпить ещё одно своё зелье, чтобы расслышать ответ';
  beat[3][0]='potionSecond';
  beat[4][0]='После второго зелья Варя слышит слова Максима отчётливо, а фонари вокруг расплываются на миг.';
 }
 return beat;
}
function talk(){
 const c=cast[s.n],beat=currentBeat(),jack=s.n===9;
 const loc=['bar.jpg','moscow.jpg','polytech.jpg','mall.jpg','mall.jpg','building.jpg','gazebo.jpg','house.jpg','hotel.jpg','field.jpg'][s.n];
 const portrait=['pasha.jpg','egor.jpg','alyona.jpg','vitya-yulia.jpg','vitya-yulia.jpg','kira.jpg','maxim.jpg','dasha.jpg','nikita.jpg','jack.jpg'][s.n];
 const sceneText=s.q===0?(s.reaction?s.reaction+' ':'')+openingLine():s.reaction;
 const choices=beat[2].map((action,i)=>'<button class="choice" data-choice="'+i+'"><span class="num">'+(i+1)+'</span><span>'+action+'</span></button>').join('');
 app.innerHTML='<section class="screen story"><div><div class="story-title"><div><div class="eyebrow">'+(jack?'Последняя встреча':'Встреча · '+String(s.n+1).padStart(2,'0'))+'</div><h1>'+c[0]+'</h1></div><div class="place">'+c[1]+'</div></div><div class="photos">'+img(portrait,c[2],c[0])+img(loc,'🏮',c[3])+'</div></div><div class="dialogue"><div class="speaker">Глава '+(s.n+1)+' · вопрос '+(s.q+1)+' из 5</div><p class="scene-line">'+sceneText+'</p><h2>Варя: «'+beat[0]+'»</h2><p class="character-reply"><strong>'+c[0]+':</strong> «'+beat[1]+'»</p><div class="choices">'+choices+'</div><div class="note">Подсказок: '+s.clues+' · История меняется после каждого решения</div></div></section>';
}
function choose(i){
 const beat=currentBeat();
 s.picks.push([s.n,s.q,i]);
 s.flags[beat[3][i]]=true;
 s.reaction=beat[4][i];
 if(i===0){s.trust++;s.warm++}else s.clues++;
 if(s.flags.lantern&&s.q===2)s.light++;
 if(s.q<4){s.q++;render();requestAnimationFrame(()=>document.querySelector('.dialogue')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}));return}
 if(s.n===9){s.screen='ending';render();scrollTo(0,0);return}
 s.n++;s.q=0;render();scrollTo(0,0);
}
function dangerScore(){
 let score=0;
 for(const [n,q,i] of s.picks){
  if([1,3,5,8].includes(n))score+=i===0?3:-1;
  else if(n===9&&q===4)score+=i===1?10:-3;
  else score+=i===0?-1:0;
 }
 if(s.flags.shadowPhoto||s.flags.shadowNotes)score-=2;
 if(s.flags.starSketch||s.flags.dashaDrawing)score-=2;
 return score;
}
function endNum(){
 if(s.outfit===4&&s.flags.potionFirst&&s.flags.potionSecond)return 16;
 let hash=2166136261^(s.outfit+1);
 for(const [n,q,i] of s.picks){hash=Math.imul(hash^((n+1)*17+(q+1)*5+i),16777619)>>>0}
 const pool=dangerScore()>=14?darkEndings:brightEndings;
 return pool[hash%pool.length];
}
function ending(){
 const n=endNum(),e=ends[n],dark=darkEndings.includes(n);
 const path=s.flags.lantern?'Фонарь Паши помогал Варе различать дороги.':'Варя запомнила мелодию Паши, которая помогала ориентироваться без фонаря.';
 const epilogue=n===16?'Варя успела пройти все десять встреч и вернуть Джека на грядку. Зелья готической алхимик оказались слишком крепкими, но теперь она в порядке. Друзья обещают ей на следующем Хэллоуине обычный чай.':dark?'Варя прошла все десять встреч. Егор, Витя, Кира и Никита были обманчивыми отражениями ночи и запутали дорогу. Варя в безопасности рядом с друзьями; её поступки привели к этой судьбе Джека и города. '+path:'Варя прошла все встречи и вернула Джека на поле. Егор, Витя, Кира и Никита оказались обманчивыми отражениями этой ночи: они рассыпались без следа, когда город снова стал обычным. '+path+' Её образ: «'+costumes[s.outfit][0]+'».';
 app.innerHTML='<section class="screen ending '+(dark?'ending-dark':'')+'"><div>'+img('field.jpg','🎃',dark?'Тыквенное поле · судьба Джека':'Тыквенное поле · Джек дома')+'</div><div class="copy"><div class="eyebrow">'+(dark?'Тревожная':'Счастливая')+' концовка '+String(n+1).padStart(2,'0')+' / 21</div><h2>'+e[0]+'</h2><span class="tag">'+e[2]+'</span><p>'+e[1]+'</p><p>'+epilogue+'</p><div class="actions"><button class="primary" data-go="replay">Начать заново</button><button class="secondary" data-go="choose">Выбрать другой образ</button></div></div></section>';
}
app.addEventListener('click',e=>{let out=e.target.closest('[data-outfit]');if(out){s.outfit=+out.dataset.outfit;render();return}let ch=e.target.closest('[data-choice]');if(ch){choose(+ch.dataset.choice);return}let go=e.target.closest('[data-go]')?.dataset.go;if(go==='choose'||go==='replay'){s={screen:'choose',outfit:null,n:0,q:0,trust:0,clues:0,light:0,warm:0,picks:[],flags:{},reaction:''};render()}if(go==='intro'){s.screen='intro';render()}if(go==='talk'){s.screen='talk';render()}});
document.querySelector('#home').onclick=()=>{s={screen:'home',outfit:null,n:0,q:0,trust:0,clues:0,light:0,warm:0,picks:[],flags:{},reaction:''};render()};render();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

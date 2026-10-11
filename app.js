// Original vector illustrations: clean contours and open spaces for coloring.
const drawings = {
 tree: `<path d="M36 90Q41 72 39 53L52 53Q49 73 56 90Z"/>
 <path d="M43 69L30 56M47 64L59 51M44 86L45 76"/>
 <path d="M22 58C10 60 4 48 12 40C2 32 10 20 20 23C17 11 33 5 40 15C44 2 61 7 62 19C77 12 88 28 77 37C89 47 78 62 65 57C60 66 49 63 45 57C37 67 25 67 22 58Z"/>
 <path d="M24 28Q17 21 17 32Q25 34 24 28ZM60 29Q64 21 69 29Q66 36 60 29ZM32 46Q24 39 25 49Q34 53 32 46ZM61 48Q68 42 69 51Q60 56 61 48Z"/>
 <path d="M6 95Q22 88 36 92M55 92Q69 88 87 95M15 91l-2-7m2 7l4-6M73 92l-1-8m1 8l5-6"/>
 <path d="M47 28Q52 24 57 28M50 25Q49 19 53 18Q58 18 57 24M57 21l4 2-4 1"/>`,
 flower: `<path d="M43 75V42M43 60Q29 46 19 53Q19 67 43 66M44 66Q54 52 68 57Q66 74 44 72"/>
 <path d="M25 55L38 63M62 61L49 68"/>
 <path d="M34 25C18 16 25 3 37 12C39-3 54-2 54 13C69 4 77 20 61 26C77 35 66 48 54 38C52 55 36 52 37 39C21 49 13 32 34 25Z"/>
 <circle cx="46" cy="26" r="11"/><path d="M39 28Q46 36 53 28"/><circle cx="41" cy="23" r="1"/><circle cx="51" cy="23" r="1"/>
 <path d="M22 76H67L62 96H27ZM19 71H70V77H19ZM33 81l2 10M57 81l-2 10"/>
 <path d="M76 37Q64 25 73 23Q84 23 81 37Q89 24 92 32Q93 42 81 42M81 36l-1 12M78 35l-3-5M82 34l4-6"/>`,
 sun: `<circle cx="46" cy="37" r="21"/>
 <path d="M44 7L46 0L49 7M44 67L46 75L49 67M16 35L8 38L16 41M76 35L84 38L76 41M23 14L18 8L20 17M69 14L75 8L72 18M22 59L17 67L26 63M69 59L75 66L72 57"/>
 <ellipse cx="39" cy="33" rx="2" ry="3"/><ellipse cx="53" cy="33" rx="2" ry="3"/><path d="M37 43Q46 54 55 43ZM32 41h4m20 0h4"/>
 <path d="M6 91H85M9 96H81M18 90V77M18 84Q6 84 8 74Q17 73 18 84M18 82Q19 70 29 72Q30 82 18 82M71 90V77M71 82Q61 81 62 73Q72 72 71 82M71 85Q79 73 85 77Q85 85 71 85"/>
 <path d="M37 93L35 84Q33 79 38 76Q36 68 42 66Q46 70 46 77Q52 73 54 79Q59 77 58 84L54 93Z"/>`,
 cat: `<path d="M56 77Q72 80 76 68Q79 53 84 57Q92 69 80 85Q72 94 56 88"/>
 <path d="M31 54Q20 65 23 88Q31 95 62 89Q69 70 56 55Z"/>
 <path d="M30 31L23 7Q35 8 41 20Q49 17 56 21Q62 10 73 9L68 34Q79 52 60 60Q43 69 26 55Q14 45 30 31Z"/>
 <path d="M29 27L27 16L36 23M60 24L69 17L65 30"/>
 <ellipse cx="37" cy="39" rx="5" ry="6"/><ellipse cx="58" cy="39" rx="5" ry="6"/>
 <ellipse cx="38" cy="40" rx="1.5" ry="3"/><ellipse cx="57" cy="40" rx="1.5" ry="3"/>
 <path d="M42 48Q47 45 52 48L47 53ZM47 53Q42 59 37 54M47 53Q52 59 57 54M28 46L10 41M29 51L8 52M65 46L83 41M64 51L85 53"/>
 <path d="M29 59Q44 69 62 59L61 65Q46 74 29 65Z"/><circle cx="46" cy="70" r="4"/>
 <path d="M34 75V89M53 75V89M27 87Q35 81 40 89M46 89Q54 81 61 87M29 88V91M34 87V91M51 87V91M56 87V91M35 10l3 5"/>
 <path d="M9 96H82"/>`,
 book: `<path d="M8 26Q26 18 45 30Q65 18 82 26V82Q62 76 45 88Q25 76 8 82Z"/>
 <path d="M12 21Q30 15 45 26Q61 15 78 21V75Q61 72 45 83Q28 72 12 75Z"/>
 <path d="M45 26V83M5 31L2 34V86Q26 82 45 93Q65 82 88 86V34L85 31M45 88V93"/>
 <path d="M20 32l17 5M20 42l17 5M20 52l17 5M20 62l17 5M54 37l16-5M54 47l16-5M54 57l16-5M54 67l16-5"/>
 <path d="M56 22V39L61 34L65 36V19M22 5l2 6m47-6l-3 6M44 2v10"/>`,
 bike: `<circle cx="21" cy="74" r="18"/><circle cx="73" cy="74" r="18"/>
 <circle cx="21" cy="74" r="14"/><circle cx="73" cy="74" r="14"/>
 <path d="M21 74L36 46L51 74H21L60 46L73 74M36 46H60L56 31H68M36 46L31 36M25 33H39Q43 37 36 38H25Z"/>
 <path d="M56 31L54 23H66Q73 23 73 29M69 29H75M51 74L57 82H64M21 60V88M7 74H35M11 64L31 84M11 84L31 64M73 60V88M59 74H87M63 64L83 84M63 84L83 64"/>
 <circle cx="51" cy="74" r="4"/><path d="M33 42H43L40 49H30ZM38 92H80M8 96H31M72 49l5 3M19 54l-5-5"/>
 <path d="M10 15l3-6 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5Z"/>`,
 heart: `<path d="M45 69L18 45C-1 25 19 6 34 17L45 27L56 17C72 5 93 26 73 45Z"/>
 <path d="M15 27Q18 17 28 23M32 48Q45 58 58 48"/>
 <ellipse cx="33" cy="36" rx="2" ry="3"/><ellipse cx="57" cy="36" rx="2" ry="3"/>
 <path d="M44 70L44 83M18 86Q25 77 35 81L43 85L50 81Q58 77 61 80Q61 84 54 87L46 92H29L19 96M5 87L14 82L24 96L14 101ZM52 91L69 78Q75 73 79 77Q81 80 75 86L59 99H29"/>
 <path d="M8 55l3-5 3 5 6 1-4 4 1 6-6-3-5 3 1-6-4-4ZM76 5l2-4 2 4 5 1-4 3 1 5-4-2-4 2 1-5-4-3Z"/>`
};
const bank={
nature:[['El árbol generoso','En el patio de la escuela había un árbol grande. Durante el recreo, los niños descansaban bajo su sombra. Sus frutos alimentaban a los pájaros. Lucía decidió regarlo y cuidar sus ramas.','¿Dónde descansaban los niños?','¿Qué podría pasar si nadie cuidara el árbol?','tree'],['Una semilla especial','Leo sembró una semilla en una maceta. Cada mañana le puso un poco de agua y la dejó cerca de la ventana. Después de varios días apareció una hoja verde. Leo sonrió al ver su pequeña planta.','¿Qué apareció en la maceta?','¿Por qué Leo dejó la maceta cerca de la ventana?','flower'],['El sol y la huerta','Ana visitó la huerta con su abuelo. Vio tomates rojos y hojas verdes. Su abuelo le explicó que las plantas necesitan agua y luz. Ana recogió un tomate y lo llevó a casa para la comida.','¿Qué recogió Ana en la huerta?','¿Qué pasaría con las plantas si no recibieran luz?','sun'],['El jardín de Julia','Julia encontró una flor marchita. La tierra estaba seca, así que buscó su regadera. Al día siguiente, los pétalos se veían más firmes. Desde entonces, Julia revisó su jardín todas las tardes.','¿Cómo estaba la tierra?','¿Por qué la flor mejoró después de recibir agua?','flower'],['Una sombra para todos','En un día caluroso, Tomás vio a su perro bajo un árbol. Se sentó a su lado y sintió el aire fresco. Después invitó a su hermana. Los tres descansaron mientras las hojas se movían.','¿Dónde estaba el perro?','¿Por qué eligieron descansar bajo el árbol?','tree'],['Después de la lluvia','La lluvia terminó y salió el sol. Sara caminó al jardín y vio gotas brillantes sobre las flores. También encontró un pequeño charco. Esperó a que se secara antes de salir con su bicicleta.','¿Qué vio Sara sobre las flores?','¿Por qué esperó antes de usar su bicicleta?','sun']],
friends:[['El libro compartido','Marta llevó un libro nuevo a la escuela. Su amigo Iván quería leerlo, pero no tenía uno. Marta lo invitó a sentarse a su lado. Leyeron juntos y descubrieron una historia de aventuras.','¿Qué llevó Marta a la escuela?','¿Cómo crees que se sintió Iván al recibir la invitación?','book'],['Un regalo de amistad','Pablo hizo una tarjeta para su amiga. Dibujó un corazón y escribió unas palabras bonitas. Ella había estado triste esa mañana. Al leer la tarjeta, sonrió y abrazó a Pablo.','¿Qué hizo Pablo para su amiga?','¿Por qué la tarjeta la hizo sonreír?','heart'],['Aprender juntos','Nora quería aprender a andar en bicicleta. Su amigo Luis la acompañó al parque y la ayudó a mantener el equilibrio. Después de practicar, Nora avanzó sola. Los dos celebraron su esfuerzo.','¿Quién ayudó a Nora?','¿Por qué practicar con un amigo pudo darle confianza?','bike'],['El turno de Sofía','Sofía quería contar una historia. Sus compañeros estaban hablando, pero Diego les pidió que escucharan. Todos guardaron silencio. Sofía contó su aventura y al final recibió un aplauso.','¿Qué pidió Diego a sus compañeros?','¿Por qué es importante escuchar a quien habla?','book'],['Una flor para Elena','Elena faltó a clase porque estaba enferma. Sus amigos dibujaron una flor y le enviaron buenos deseos. Cuando regresó, encontró el dibujo en su mesa. Lo guardó con mucho cariño.','¿Qué dibujaron los amigos de Elena?','¿Qué le hizo sentir que sus amigos la recordaban?','flower'],['La merienda','Raúl olvidó su merienda en casa. Al llegar el recreo, miró su mochila vacía. Camila partió su pan en dos y compartió una mitad. Raúl le dio las gracias y se sentó con ella.','¿Qué compartió Camila?','¿Cómo supo Camila que Raúl necesitaba ayuda?','heart']],
animals:[['El gato curioso','Un gato escuchó un ruido detrás de una caja. Se acercó despacio y miró dentro. Allí había una pelota que se movía con el viento. El gato la empujó con su pata y empezó a jugar.','¿Qué encontró el gato en la caja?','¿Por qué se acercó despacio?','cat'],['Una casa para las aves','Eva vio pájaros buscando refugio. Con ayuda de su papá, colocó una casita en un árbol. Al día siguiente, un pájaro se acercó y entró. Eva lo observó desde lejos para no asustarlo.','¿Dónde colocaron la casita?','¿Por qué Eva observó al pájaro desde lejos?','tree'],['El gato perdido','Dani encontró un gato junto a la escuela. Llevaba un collar con el nombre de su dueña. Dani pidió ayuda a una maestra. Más tarde, la dueña llegó y abrazó a su mascota.','¿Qué llevaba el gato en el cuello?','¿Por qué el collar ayudó a encontrar a su dueña?','cat'],['Las mariposas del jardín','Lola vio mariposas cerca de las flores. Volaban de una a otra sin detenerse mucho tiempo. Lola decidió no arrancar las flores. Quería que las mariposas siguieran visitando el jardín.','¿Dónde vio Lola las mariposas?','¿Por qué dejar las flores podría ayudar a las mariposas?','flower'],['Un rincón tranquilo','El gato de Inés se escondió al escuchar un ruido fuerte. Inés preparó una manta en un rincón tranquilo. Poco después, el gato salió y se acostó allí. Inés habló suavemente mientras lo acariciaba.','¿Qué preparó Inés para su gato?','¿Por qué hablar suavemente pudo ayudarlo?','cat'],['El árbol lleno de vida','Óscar miró un árbol y descubrió un nido. También vio hormigas en el tronco. Comprendió que el árbol era hogar de muchos animales. Por eso recogió la basura que había cerca.','¿Qué descubrió Óscar entre las ramas?','¿Cómo ayuda a los animales recoger la basura?','tree']],
daily:[['La bicicleta de Mateo','Mateo recibió una bicicleta por su cumpleaños. Al principio tenía miedo de caerse. Practicó cada tarde en el parque. Una semana después, pudo avanzar sin ayuda y se sintió muy orgulloso.','¿Qué recibió Mateo por su cumpleaños?','¿Por qué Mateo logró avanzar sin ayuda?','bike'],['El libro de la biblioteca','Clara pidió un libro en la biblioteca. Lo llevó a casa y lo leyó cada noche. Cuando terminó, lo devolvió sin doblar las páginas. Quería que otro niño pudiera disfrutarlo también.','¿Dónde pidió Clara el libro?','¿Por qué cuidó las páginas del libro?','book'],['Una mañana soleada','Bruno preparó su mochila antes de dormir. Por la mañana encontró todo listo. Desayunó con calma y llegó temprano a la escuela. Decidió preparar sus cosas cada noche.','¿Cuándo preparó Bruno su mochila?','¿Por qué preparar la mochila le ayudó a llegar temprano?','sun'],['El camino a casa','Al salir de la escuela, Luz vio una bicicleta en el suelo. La levantó y la dejó junto a la pared. Poco después, un niño llegó a buscarla. Le agradeció que la hubiera cuidado.','¿Qué encontró Luz en el suelo?','¿Qué podía pasar si la bicicleta se quedaba en el camino?','bike'],['El regalo de mamá','Alma quiso sorprender a su mamá. Dibujó un corazón en una hoja y escribió cuánto la quería. Dejó el dibujo en la mesa. Su mamá lo encontró al volver y abrazó a Alma.','¿Dónde dejó Alma el dibujo?','¿Por qué un dibujo sencillo puede ser un regalo especial?','heart'],['La planta del salón','Los alumnos tenían una planta en el salón. Cada día, un niño diferente la regaba. El viernes fue el turno de Pedro. Antes de salir, revisó que la planta tuviera agua suficiente.','¿De quién fue el turno el viernes?','¿Por qué repartir los turnos ayuda a cuidar la planta?','flower']]};
let theme='nature',counter=0,readings=[];
const $=id=>document.getElementById(id);
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function svg(kind){return `<svg class="drawing" viewBox="-3 -3 94 104" fill="white" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Dibujo para colorear">${drawings[kind]}</svg>`;}
// Escape each character before marking capitals and punctuation; edited HTML remains text.
function readingMarkup(text) {
  return Array.from(text, character => /[\p{Lu}\p{P}]/u.test(character)
    ? `<span class="reading-highlight">${escapeHtml(character)}</span>`
    : escapeHtml(character)).join('');
}
function render() {
  const title = escapeHtml($('title').value.trim() || 'Mis pequeñas lecturas');
  $('sheet').innerHTML = [0, 1].map(strip => `<section class="strip">
    <h2 class="strip-title">${title}</h2>
    <p class="strip-subtitle">LEE · COPIA · PIENSA · RESPONDE · COLOREA</p>
    <div class="readings">${readings.slice(strip * 3, strip * 3 + 3).map(r => `<article class="reading">
      <div class="reading-content"><h3>${readingMarkup(r.title)}</h3>
      <p class="reading-text">${readingMarkup(r.text)}</p>
      <div class="questions-art"><div class="questions">
      <p><b>1<span class="reading-highlight">.</span></b> ${readingMarkup(r.literal)}</p>
      <p><b>2<span class="reading-highlight">.</span></b> ${readingMarkup(r.inference)}</p>
      </div>${svg(r.art)}</div></div></article>`).join('')}</div></section>`).join('');
  fitSheet();
}
// Measure real wrapping at the current screen/print width, then find the largest
// readable size that fits each of the three equal-height reading slots.
function fitSheet() {
  const scale = $('sheet').getBoundingClientRect().width / 816;
  let overflow = false;
  document.querySelectorAll('.reading').forEach(article => {
    const content = article.querySelector('.reading-content');
    const available = article.clientHeight - parseFloat(getComputedStyle(article).paddingTop) - 2;
    let low = 9 * scale, high = 24 * scale;
    const fits = size => {
      article.style.setProperty('--reading-size', `${size}px`);
      return content.getBoundingClientRect().height <= available && content.scrollWidth <= article.clientWidth;
    };
    if (!fits(low)) overflow = true;
    for (let i = 0; i < 12; i++) {
      const middle = (low + high) / 2;
      if (fits(middle)) low = middle; else high = middle;
    }
    fits(low);
    article.classList.toggle('reading-overflow', content.getBoundingClientRect().height > available);
  });
  $('sheet').dataset.overflow = String(overflow);
  const ready = document.querySelector('.ready');
  ready.textContent = overflow ? '● Acorta el texto para imprimir' : '● Lista para imprimir';
}
window.addEventListener('beforeprint', fitSheet);
window.addEventListener('afterprint', fitSheet);
window.matchMedia('print').addEventListener('change', fitSheet);
new ResizeObserver(fitSheet).observe($('sheet'));
document.fonts.ready.then(fitSheet);
function generate(){const grade=Number($('grade').value);const list=bank[theme];readings=Array.from({length:6},(_,i)=>{const r=list[(i+counter)%list.length];let text=r[1];if(grade===1)text=text.split('. ').slice(0,3).join('. ').replace(/\.?$/,'.');if(grade>=4)text+=' Después, pensó en lo que había aprendido y lo compartió con su familia.';return {title:r[0],text,literal:r[2],inference:r[3],art:r[4]};});counter++;render();try{localStorage.setItem('lecturitas',JSON.stringify({theme,grade,title:$('title').value,readings}));}catch{} }
function toast(msg){$('toast').textContent=msg;$('toast').classList.add('visible');setTimeout(()=>$('toast').classList.remove('visible'),2800);}
document.querySelectorAll('.theme').forEach(b=>b.addEventListener('click',()=>{theme=b.dataset.theme;document.querySelectorAll('.theme').forEach(x=>x.classList.toggle('active',x===b));}));
$('generate').onclick=()=>{generate();toast('Tu nueva hoja está lista para leer y colorear.');};$('title').oninput=render;$('grade').onchange=()=>{generate();};$('print').onclick=()=>{fitSheet();if($('sheet').dataset.overflow==='true'){toast('El texto es demasiado largo. Acórtalo antes de imprimir.');return;}window.print();};
$('edit').onclick=()=>{$('edit-fields').innerHTML=readings.map((r,i)=>`<section class="edit-reading"><h3>Tira ${Math.floor(i/3)+1} · Lectura ${i%3+1}</h3>${[['title','Título'],['text','Lectura'],['literal','Pregunta de comprensión'],['inference','Pregunta de inferencia']].map(([key,label])=>`<label for="r${i}-${key}">${label}</label>${key==='text'?`<textarea id="r${i}-${key}">${escapeHtml(r[key])}</textarea>`:`<input id="r${i}-${key}" value="${escapeHtml(r[key])}" maxlength="${key==='title'?60:160}">`}`).join('')}</section>`).join('');$('editor').showModal();};
$('save').onclick=()=>{for(let i=0;i<6;i++){for(const key of ['title','text','literal','inference']){const field=$(`r${i}-${key}`);if(!field.value.trim()){field.focus();toast('Completa todos los textos y preguntas.');return;}}}readings.forEach((r,i)=>['title','text','literal','inference'].forEach(key=>r[key]=$(`r${i}-${key}`).value.trim()));render();$('editor').close();toast('Cambios guardados en la hoja.');};generate();

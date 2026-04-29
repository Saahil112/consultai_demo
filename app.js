// BriefAI prototype app.js — static data and view switching

const sources = {
  q4: {
    id: 'q4', group: 'external', subgroup: 'earnings', type: 'External · Earnings transcript',
    title: 'Q4 Earnings Call',
    meta: 'External source · Added today at 7:45 AM · Labor cost discussion',
    company: 'Delta Air Lines',
    quarter: 'Q4 2023',
    date: 'January 15, 2024',
    highlights: [
      'Operating revenue of $12.7B, up 3% YoY',
      'Labor productivity improved 6% through operational efficiency',
      'On-time performance maintained at 84% despite labor pressures',
      'Operating margin expanded 140 basis points to 8.2%'
    ],
    transcript: `Edward Bastian, Chief Executive Officer:
Thank you for joining us. We're pleased with Q4 results, which show that disciplined operational execution drives both profitability and reliability.

Labor costs remain our largest controllable expense. Rather than cutting labor, we've invested in process improvements that reduce unnecessary overtime and contractor usage. This approach protects our on-time performance while improving margins.

Joanne Smith, Chief Financial Officer:
Operating expenses grew 1.2% despite a 3% revenue increase. The efficiency gains came primarily from turnaround time optimization and maintenance scheduling improvements. We expect these trends to continue in 2024.

Edward Bastian, Chief Executive Officer:
Looking ahead, we're focused on three priorities: maintaining service reliability, investing in employee productivity, and generating shareholder value. We believe these three goals are mutually reinforcing, not competing.`,
    why: 'Shows that cutting labor waste is a priority for the company and industry right now.',
    takeaway: 'Delta leadership explicitly framed efficiency improvements as protecting, not cutting, labor costs while achieving margin expansion.'
  },
  news: {
    id:'news', group:'external', subgroup:'news', type:'External · News article',
    title:'How Airlines Are Winning With Labor Efficiency',
    meta:'External source · Updated today at 6:50 AM · Industry news',
    headline:'How Airlines Are Winning With Labor Efficiency',
    author:'Sarah Mitchell',
    publication:'Aviation Industry Digest',
    date:'March 28, 2024',
    articleBody:`As labor costs continue to dominate airline operating budgets, leading carriers are demonstrating measurable gains through efficiency improvements that protect service quality.

Delta, United, and Southwest have each launched targeted programs focusing on maintenance scheduling optimization and ground crew turnaround times. Industry analysts point to a 12-15% improvement in on-time performance at carriers implementing structured efficiency programs.

"The key differentiator is that these aren't cost-cutting initiatives," says Dr. James Chen, Senior Analyst at Aviation Economics Institute. "They're operational improvements that happen to reduce labor waste."

Competitor data shows that airlines achieving better labor productivity are receiving higher valuations from institutional investors. Maintenance staff at high-performing hubs report reduced overtime and more predictable schedules—factors that improve retention and morale.

Experts expect this trend to accelerate as fuel costs remain elevated and pilot contracts undergo renegotiation across the industry.`,
    why:'Shows that other airlines are already moving on efficiency. This creates urgency for Delta.'
  },
  benchmark: {
    id:'benchmark', group:'internal', subgroup:'reference', type:'Internal · Deck',
    title:'Delta Benchmark Deck',
    meta:'Internal source · Last updated Nov 2023 · Ready to reuse',
    why:'Has slides you can use directly in your partner meeting. Shows maintenance costs and labor productivity by location.',
    slides:[
      {title:'Maintenance Cost Comparison', bullets:['Peer A: $1,200/turn','Peer B: $1,050/turn','Delta: $980/turn'], notes:'Slide highlights maintenance cost per turnaround across peers.'},
      {title:'Labor Productivity by Airport', bullets:['JFK: 8.2 tasks/hour','ATL: 9.1 tasks/hour','LAX: 8.6 tasks/hour'], notes:'Station-level productivity that maps to overtime hotspots.'},
      {title:'Controllable vs Network Costs', bullets:['Controllable: overtime, contractors','Network: weather, fleet availability'], notes:'Helps separate root causes for partner discussion.'},
      {title:'Recommended Slides for Partner', bullets:['Slide 12: Cost comparison','Slide 14: Productivity by airport','Slide 18: Implementation roadmap'], notes:'Use these 3 slides in partner-facing deck.'}
    ]
  },
  falcon: {
    id:'falcon', group:'internal', subgroup:'reference', type:'Internal · Project notes',
    title:'Notes from American Airlines Project',
    meta:'Internal source · Prior engagement notes · Created Mar 2022',
    project:'Project Falcon (American Airlines)',
    why:'Lessons learned from a similar airline engagement. Shows messaging, slides, and data to reuse.',
    highlights:['Frame around protecting reliability','Use station-level productivity to show impact','Show quick wins that don\'t harm service'],
    recommendations:['Lead with reliability','Reuse slides showing station-level productivity','Separate controllable labor from network issues'],
    body:`<div class="memo-header"><strong>What worked</strong></div>
          <ul><li>Frame improvements around protecting reliability, not cutting costs</li>
          <li>Get granular labor productivity data by airport</li>
          <li>Focus on removing unnecessary overtime and contractor costs</li></ul>
          <div class="memo-section"><strong>Proven message</strong><p>"We\'re not cutting corners to save money. We\'re improving how we run operations so we can protect on-time performance while reducing wasted labor."</p></div>`
  },
  slack: {
    id:'slack', group:'internal', subgroup:'messages', type:'Internal · Slack thread',
    title:'Team Discussion on Partner Meeting',
    meta:'Internal project chat · From last 24 hours',
    why:'Need concrete data showing how reliability can be improved. Prior benchmark deck has relevant info on slides 12-18.',
    channel:'#delta-cost-transformation',
    workspace:'Delta Program',
    messages:[
      {user:'Priya M.', role:'Partner', time:'8:42 AM', text:'Before tomorrow\'s check-in, we need stronger data supporting our recommendation. We need labor data by station, not just aggregates.'},
      {user:'Alex R.', role:'Manager', time:'9:06 AM', text:'Agree. I\'ll find station-level productivity and overtime split. We need to show where reliability is weak.'},
      {user:'Jamie L.', role:'Associate', time:'9:18 AM', text:'Found a prior benchmark deck with that info. Slides 12–18 map well to this question and can go straight into partner prep.'}
    ],
    body:`<div class="slack-msg"><strong>Partner feedback:</strong><p>The case is strong, but we need specific labor data by airport to make it credible.</p></div>
          <div class="slack-msg"><strong>Team response:</strong><p>We found a deck from past work that has the labor breakdown. We can reuse slides 12–18.</p></div>
          <p><strong>Next step:</strong> Get the labor data from the client and use the deck slides in tomorrow's meeting.</p>`
  },
  coo: {
    id:'coo', group:'internal', subgroup:'meeting-notes', type:'Internal · Meeting notes',
    title:'Meeting Notes from COO Sync',
    meta:'Added yesterday at 5:15 PM · Client priorities',
    why:'The COO made clear what matters most: reliability comes first, cost savings second.',
      meetingDate:'Yesterday, 5:15 PM',
      meetingTitle:'Vice President Operations Sync',
      attendees:'Chief Operating Officer, Partner Lead, Senior Manager',
      summary:'The client wants cost improvements, but only if service stays strong.',
      decisions:['Lead with reliability in the next meeting','Use examples from other airlines','Avoid generic cost-cutting language'],
      actions:['Show how the plan protects on-time performance','Separate controllable labor issues from network problems','Bring one or two examples of similar projects'],
      keyTakeaway:'Reliability is the foundation. Efficiency improvements are valued only if they protect on-time performance.',
      takeaway:'This meeting note changes the story: reliability has to come first.',
      body:`<p><strong>What the COO said:</strong></p>
        <ul><li>Reliability is the most important thing — don\'t compromise it</li>
        <li>We\'re open to productivity work, but only if it protects on-time performance</li>
        <li>Show us examples from other airlines that succeeded with this</li></ul>
        <p><strong>How to frame it:</strong> Lead with reliability, show that efficiency and reliability go together.</p>`
  },
  '10k': {
    id:'10k', group:'external', subgroup:'filing', type:'External · Filing',
    title:'Delta 10-K Filing',
    meta:'External source · Annual filing · Company background',
    why:'Shows how labor costs and reliability affect the company\'s financial performance.',
    body:`<p><strong>Key themes from the filing:</strong></p>
          <ul><li>Labor costs are a major expense that affects profitability</li>
          <li>On-time performance is critical to customer satisfaction and brand reputation</li>
          <li>Maintenance and fleet investments are necessary for reliability</li></ul>
          <p><strong>Context:</strong> Cutting costs without protecting reliability could backfire.</p>`
  },
  email: {
    id:'email', group:'internal', subgroup:'emails', type:'Internal · Email',
    title:'Partner Feedback Email',
    meta:'Internal email · Sent yesterday · Partner expectations',
    from:'Priya M.',
    to:'Consulting team',
    subject:'Prep for tomorrow',
    sent:'Yesterday, 4:12 PM',
    message:'For tomorrow\'s prep, keep the note tight. Focus on why this is urgent, the best prior work we can reuse, and the top questions we still need answered by the client.',
    takeaway:'Keep the meeting note short and action-oriented.',
    why:'Clarifies what the partner expects you to focus on for the meeting.',
    body:`<p><strong>Partner asked for:</strong></p>
          <ul><li>Why this is urgent (external case)</li>
          <li>Which of our old work we can reuse</li>
          <li>What you need from the client to move forward</li></ul>
          <p><strong>Key ask:</strong> Keep it concise and actionable.</p>`
  }
};

const projects = {
  delta: {id:'delta', title:'Delta Airlines Cost Transformation'},
  retail: {id:'retail', title:'Retail Pricing Diagnostic'},
  pharma: {id:'pharma', title:'Pharma Market Entry'}
};

// View switching
function switchView(viewId){
  document.querySelectorAll('.view').forEach(v=>v.style.display='none');
  const view = document.getElementById(viewId===true?viewId:viewId);
  if(view) view.style.display='block';
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.view===viewId));
  // accessibility: move focus to the first heading in the view
  if(view){
    const heading = view.querySelector('h1,h2,h3');
    if(heading){
      heading.setAttribute('tabindex','-1');
      heading.focus();
    }
  }
}

// Initialize a simple slide deck viewer for `benchmark`
function initializeDeck(resourceId){
  const res = sources[resourceId];
  if(!res || !res.slides) return;
  const container = document.querySelector('#source-body .deck-wrapper');
  if(!container) return;
  let current = 0;
  const slides = Array.from(container.querySelectorAll('.slide'));
  const indicator = container.querySelector('.deck-indicator');
  const show = (idx)=>{
    slides.forEach((s,i)=>s.style.display = i===idx ? '' : 'none');
    current = idx;
    if(indicator) indicator.innerText = (idx+1) + ' / ' + slides.length;
  };
  const prev = container.querySelector('.deck-prev');
  const next = container.querySelector('.deck-next');
  if(prev) prev.onclick = ()=> show(Math.max(0, current-1));
  if(next) next.onclick = ()=> show(Math.min(slides.length-1, current+1));
  // allow arrow keys
  container.tabIndex = 0;
  container.onkeydown = (e)=>{
    if(e.key === 'ArrowLeft') prev && prev.click();
    if(e.key === 'ArrowRight') next && next.click();
  };
  // show first
  show(0);
}


// Show brief for project
function showBrief(projectId){
  if(projectId==='delta'){
    switchView('brief-delta');
  } else {
    // simple placeholder for other projects
    alert('Opening brief for: '+(projects[projectId]?.title||projectId));
  }
}

// Open Ask AI view and optionally set context
function openAsk(projectId){
  switchView('ask');
}

// Helper: create a type pill
function getSourceKind(res){
  return (res.group || (res.type || '').split('·')[0]).trim().toLowerCase();
}

function getSourceSubgroup(res){
  return (res.subgroup || '').trim().toLowerCase();
}

function getSourceKindLabel(kind){
  return kind === 'client' ? 'Client' : kind === 'slack' ? 'Messages' : kind === 'email' ? 'Emails' : kind === 'external' ? 'External' : kind === 'filing' ? 'Filing' : 'Internal';
}

function getSourceSubgroupLabel(subgroup){
  const labels = {
    emails: 'Emails',
    messages: 'Messages',
    'meeting-notes': 'Meeting Notes',
    reference: 'Reference',
    earnings: 'Earnings',
    news: 'News',
    filing: 'Filing'
  };
  return labels[subgroup] || '';
}

function createTypePill(kind, typeLabel, extraClass){
  const label = typeLabel || getSourceKindLabel(kind);
  const variantClass = extraClass ? ` ${extraClass}` : '';
  return `<span class="doc-type-pill ${kind}${variantClass}">${label}</span>`;
}

// Helper: format document body by kind
function formatDocumentBody(res, resourceId){
  const kind = getSourceKind(res);
  const subgroup = getSourceSubgroup(res);
  let docClass = 'source-body';
  let formattedBody = res.body;

  if(kind === 'email' || subgroup === 'emails' || resourceId === 'email'){
    docClass = 'source-body doc-email';
    formattedBody = `<div class="mail-app">
      <div class="mail-toolbar">
        <span class="mail-pill">Inbox</span>
        <span class="mail-pill active">Partner Thread</span>
      </div>
      <div class="email-card">
        <div class="email-header">
          <div class="email-field"><span class="email-label">From</span><span>${res.from || 'Team'} <span class="email-role">(Partner)</span></span></div>
          <div class="email-field"><span class="email-label">To</span><span>${res.to || 'Consulting team'}</span></div>
          <div class="email-field"><span class="email-label">Subject</span><span>${res.subject || res.title}</span></div>
          <div class="email-field"><span class="email-label">Sent</span><span>${res.sent || res.meta.split('·')[1]?.trim() || 'Today'}</span></div>
        </div>
        <div class="email-message">${res.message || res.body}</div>
        <div class="email-signoff">- ${res.from || 'Partner'}</div>
      </div>
    </div>`;
  } else if(kind === 'slack' || subgroup === 'messages' || resourceId === 'slack'){
    docClass = 'source-body doc-slack';
    const messageMarkup = (res.messages || []).map(m => `<div class="slack-row">
      <div class="slack-avatar">${(m.user || '?').charAt(0)}</div>
      <div class="slack-message">
        <div class="slack-message-meta"><span class="slack-user">${m.user}</span><span class="slack-role">${m.role || ''}</span><span class="slack-time">${m.time || ''}</span></div>
        <p>${m.text}</p>
      </div>
    </div>`).join('');
    formattedBody = `<div class="slack-app">
      <div class="slack-app-header">
        <div class="slack-workspace">${res.workspace || 'Project Workspace'}</div>
        <div class="slack-channel">${res.channel || '#project-thread'}</div>
      </div>
      <div class="slack-thread">
        ${messageMarkup || res.body}
      </div>
    </div>`;
  } else if(resourceId === 'q4'){
    docClass = 'source-body doc-transcript';
    const highlightsList = (res.highlights || []).map(h => '<li>' + h + '</li>').join('');
    const transcriptText = (res.transcript || '').split('\n\n').map(para => '<p>' + para.trim() + '</p>').join('');
    formattedBody = '<div class="earnings-call"><div class="earnings-header"><div class="earnings-company">' + (res.company || 'Company') + '</div><div class="earnings-meta"><span class="earnings-quarter">' + (res.quarter || 'Q4') + '</span><span class="earnings-divider">·</span><span class="earnings-date">' + (res.date || 'Today') + '</span></div></div><div class="earnings-highlights"><h3>Operational Highlights</h3><ul>' + highlightsList + '</ul></div><div class="earnings-transcript">' + transcriptText + '</div></div>';
  } else if(resourceId === 'benchmark'){
    docClass = 'source-body doc-deck';
    const slides = (res.slides || []);
    const slidesMarkup = slides.map((s,idx)=>`<div class="slide" data-index="${idx}" style="${idx? 'display:none;':''}"><h3 class="slide-title">${s.title}</h3><ul>${(s.bullets||[]).map(b=>`<li>${b}</li>`).join('')}</ul><div class="slide-notes">${s.notes||''}</div></div>`).join('');
    formattedBody = `<div class="deck-wrapper"><div class="deck-toolbar"><button class="deck-prev">◀</button><div class="deck-indicator">1 / ${slides.length||1}</div><button class="deck-next">▶</button></div><div class="deck-slides">${slidesMarkup}</div></div>`;
  } else if(resourceId === 'falcon'){
    docClass = 'source-body doc-memo';
  } else if(resourceId === 'news'){
    docClass = 'source-body doc-news';
    const paragraphs = (res.articleBody || '').split('\n\n').map(p => p.trim()).filter(p => p).map(p => '<p>' + p + '</p>').join('');
    formattedBody = '<div class="news-article"><div class="news-article-header"><h2 class="news-headline">' + (res.headline || res.title) + '</h2><div class="news-meta"><span class="news-author">By ' + (res.author || 'Staff Writer') + '</span><span class="news-divider">·</span><span class="news-publication">' + (res.publication || 'Publication') + '</span><span class="news-divider">·</span><span class="news-date">' + (res.date || 'Today') + '</span></div></div><div class="news-article-body">' + paragraphs + '</div></div>';
  } else if(kind === 'external' && resourceId === '10k'){
    docClass = 'source-body doc-filing';
  } else if(subgroup === 'meeting-notes' || resourceId === 'coo'){
    docClass = 'source-body doc-meeting-notes';
    const decisionsList = (res.decisions || []).map(item=>'<li>' + item + '</li>').join('');
    const actionsList = (res.actions || []).map(item=>'<li>' + item + '</li>').join('');
    formattedBody = '<div class="meeting-call"><div class="meeting-header-section"><div class="meeting-call-title">' + (res.meetingTitle || res.title) + '</div><div class="meeting-meta-row"><span class="meeting-label">Date</span><span>' + (res.meetingDate || 'Yesterday') + '</span></div><div class="meeting-meta-row"><span class="meeting-label">Attendees</span><span>' + (res.attendees || 'Team') + '</span></div><div class="meeting-meta-row"><span class="meeting-label">Summary</span><span>' + (res.summary || res.why) + '</span></div></div><div class="meeting-key-takeaway"><strong>Key Takeaway:</strong><p>' + (res.keyTakeaway || res.why) + '</p></div><div class="meeting-section"><h4>Decisions</h4><ul>' + decisionsList + '</ul></div><div class="meeting-section"><h4>Action Items</h4><ul>' + actionsList + '</ul></div></div>';
  }

  return {docClass, formattedBody};
}

// Populate recent sources (only referenced sources)
function renderRecentSources(){
  const container = document.getElementById('recent-sources');
  if(!container) return;
  container.innerHTML = '';
  const recentIds = ['q4', 'benchmark', 'slack', 'coo'];
  recentIds.forEach(id=>{
    const res = sources[id];
    const kind = getSourceKind(res);
    const subgroup = getSourceSubgroup(res);
    const div = document.createElement('div');
    div.className = 'source-row';
    div.dataset.kind = kind;
    if(subgroup) div.dataset.subgroup = subgroup;
    div.onclick = ()=>showResource(id);
    div.innerHTML = `<span>${res.title}</span>${subgroup ? createTypePill(subgroup, getSourceSubgroupLabel(subgroup), `sub-${subgroup}`) : ''}`;
    container.appendChild(div);
  });
}

function buildSourceGroupMarkup(title, items, kind){
  return `<div class="source-group">
    <div class="source-group-title">
      <span>${title}</span>
    </div>
    ${items.map(({id,res})=>{
      const subgroup = getSourceSubgroup(res);
      const subgroupLabel = getSourceSubgroupLabel(subgroup);
      return `<div class="source-row" data-kind="${kind}"${subgroup ? ` data-subgroup="${subgroup}"` : ''} onclick="showResource('${id}')">
        <span>${res.title}</span>
        ${subgroupLabel ? createTypePill(subgroup, subgroupLabel, `sub-${subgroup}`) : ''}
      </div>`;
    }).join('')}
  </div>`;
}

// Populate sources index
function renderSourcesIndex(){
  const container = document.getElementById('sources-grouped');
  if(!container) return;
  container.innerHTML = '';

  const grouped = { external: [], internal: [] };
  const sourceIds = ['q4','10k','news','benchmark','falcon','slack','coo','email'];
  sourceIds.forEach(id=>{
    const res = sources[id];
    const kind = getSourceKind(res);
    if(!grouped[kind]) grouped[kind] = [];
    grouped[kind].push({id, res});
  });

  const groupActions = {
    external: '<button class="icon-btn upload" onclick="alert(\'Upload document...\')">+</button>'
  };

  if(grouped.external.length){
    container.innerHTML += `<div class="source-group">
      <div class="source-group-title source-group-title--split">
        <span>External Sources</span>
        <div class="source-group-actions">${groupActions.external}</div>
      </div>
      ${grouped.external.map(({id,res})=>{
        const subgroup = getSourceSubgroup(res);
        const subgroupLabel = getSourceSubgroupLabel(subgroup);
        return `<div class="source-row" data-kind="external"${subgroup ? ` data-subgroup="${subgroup}"` : ''} onclick="showResource('${id}')">
          <span>${res.title}</span>
          ${subgroupLabel ? createTypePill('external', subgroupLabel, `sub-${subgroup}`) : ''}
        </div>`;
      }).join('')}
    </div>`;
  }

  if(grouped.internal.length){
    const internalGroups = ['emails', 'messages', 'meeting-notes', 'reference'];
    const internalTitles = {
      emails: 'Emails',
      messages: 'Messages',
      'meeting-notes': 'Meeting Notes',
      reference: 'Reference'
    };
    const internalActions = {
      emails: '<button class="icon-btn connect" onclick="alert(\'Connecting to Outlook...\')">🔗 Connect Outlook</button>',
      messages: '<button class="icon-btn connect" onclick="alert(\'Connecting to Slack...\')">🔗 Connect Slack</button>',
      'meeting-notes': '<button class="icon-btn upload" onclick="alert(\'Upload notes...\')">+</button>',
      reference: '<button class="icon-btn upload" onclick="alert(\'Upload reference doc...\')">+</button>'
    };

    const subgroupSections = internalGroups.map(subgroup=>{
      const items = grouped.internal.filter(({res})=>getSourceSubgroup(res) === subgroup);
      if(!items.length) return '';
      return `<div class="source-subgroup">
        <div class="source-subgroup-title">
          <span>${internalTitles[subgroup]}</span>
          <div class="source-group-actions">${internalActions[subgroup]}</div>
        </div>
        ${items.map(({id,res})=>{
          const subgroupLabel = getSourceSubgroupLabel(getSourceSubgroup(res));
          return `<div class="source-row" data-kind="internal" data-subgroup="${subgroup}" onclick="showResource('${id}')">
            <span>${res.title}</span>
            ${subgroupLabel ? createTypePill('internal', subgroupLabel, `sub-${subgroup}`) : ''}
          </div>`;
        }).join('')}
      </div>`;
    }).join('');

    container.innerHTML += `<div class="source-group">
      <div class="source-group-title source-group-title--split">
        <span>Internal Sources</span>
        <div class="source-group-actions"><button class="icon-btn upload" onclick="alert('Upload document...')">+</button></div>
      </div>
      <div class="source-subgroups">${subgroupSections}</div>
    </div>`;
  }
}

// Show resource detail
let lastBrief = 'dashboard';
function getCurrentViewId(){
  const views = document.querySelectorAll('.view');
  for(const v of views){
    if(window.getComputedStyle(v).display !== 'none') return v.id;
  }
  return 'dashboard';
}

function showResource(resourceId){
  // remember where user came from (current visible view)
  lastBrief = getCurrentViewId() || 'dashboard';
  const res = sources[resourceId];
  if(!res) return alert('Resource not found');
  switchView('source-detail');
  document.getElementById('source-title').innerText = res.title;
  document.getElementById('source-meta').innerText = res.meta;

  // format body based on document type
  const {docClass, formattedBody} = formatDocumentBody(res, resourceId);
  const bodyEl = document.getElementById('source-body');
  bodyEl.className = docClass;
  bodyEl.innerHTML = formattedBody;
  // initialize interactive deck viewer if this is a deck
  if(resourceId === 'benchmark' && typeof initializeDeck === 'function'){
    initializeDeck('benchmark');
  }

  const summaryEl = document.getElementById('source-summary');
  if(summaryEl){
    summaryEl.innerText = res.takeaway || res.summary || res.why || 'No summary available.';
  }

  const sourceBadges = document.getElementById('source-badges');
  if(sourceBadges){
    const kind = getSourceKind(res);
    const subgroup = getSourceSubgroup(res);
    sourceBadges.className = 'source-badges';
    sourceBadges.innerHTML = `${createTypePill(kind, getSourceKindLabel(kind))}${subgroup ? createTypePill(kind, getSourceSubgroupLabel(subgroup), `sub-${subgroup}`) : ''}`;
  }
  const other = document.getElementById('source-other');
  if(other){
    other.innerHTML='';
    Object.values(sources).filter(s=>s.id!==res.id).slice(0,5).forEach(s=>{
      const r = document.createElement('div');
      r.className='source-row';
      const kind = getSourceKind(s);
      const subgroup = getSourceSubgroup(s);
      r.dataset.kind = kind;
      if(subgroup) r.dataset.subgroup = subgroup;
      const pill = subgroup ? createTypePill(kind, getSourceSubgroupLabel(subgroup), `sub-${subgroup}`) : '';
      r.innerHTML = `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><a class="link" onclick="showResource('${s.id}')">${s.title}</a>${pill}</div> <div class="muted" style="font-size:12px">· ${s.type}</div>`;
      other.appendChild(r);
    });
  }
}

function backToBrief(){
  // fall back to dashboard if lastBrief missing
  switchView(lastBrief || 'dashboard');
}

// Reorganize brief sources by type group
function renderBriefSourcesGrouped(){
  const container = document.getElementById('brief-sources-grouped');
  if(!container) return;
  container.innerHTML = '';

  const grouped = { external: [], internal: [] };
  const sourceIds = ['q4','10k','news','benchmark','falcon','slack','coo','email'];
  sourceIds.forEach(id=>{
    const res = sources[id];
    const kind = getSourceKind(res);
    if(!grouped[kind]) grouped[kind] = [];
    grouped[kind].push({id, res});
  });

  if(grouped.external.length){
    container.innerHTML += buildSourceGroupMarkup('External Sources', grouped.external, 'external');
  }

  if(grouped.internal.length){
    const internalGroups = ['emails', 'messages', 'meeting-notes', 'reference'];
    const internalTitles = {
      emails: 'Emails',
      messages: 'Messages',
      'meeting-notes': 'Meeting Notes',
      reference: 'Reference'
    };
    const subgroupMarkup = internalGroups.map(subgroup=>{
      const items = grouped.internal.filter(({res})=>getSourceSubgroup(res) === subgroup);
      if(!items.length) return '';
      return `<div class="source-subgroup">
        <div class="source-subgroup-title"><span>${internalTitles[subgroup]}</span></div>
        ${items.map(({id,res})=>`<div class="source-row small" data-kind="internal" data-subgroup="${subgroup}" onclick="showResource('${id}')">${res.title}<span class="muted" style="font-size:11px"> · ${res.type}</span></div>`).join('')}
      </div>`;
    }).join('');

    container.innerHTML += `<div class="source-group">
      <div class="source-group-title">Internal Sources</div>
      <div class="source-subgroups">${subgroupMarkup}</div>
    </div>`;
  }
}

// Sidebar nav wiring
document.querySelectorAll('.nav-btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    const view = b.dataset.view;
    if(view==='ask'){
      switchView('ask');
    } else if(view==='sources'){
      renderSourcesIndex();
      switchView('sources');
    } else if(view==='projects'){
      switchView('projects');
    } else if(view==='settings'){
      switchView('settings');
    } else {
      switchView('dashboard');
    }
  });
});

// Initialize
switchView('dashboard');
renderRecentSources();
renderSourcesIndex();
renderBriefSourcesGrouped();

// Expose functions for inline onclick usage
window.switchView = switchView;
window.showBrief = showBrief;
window.openAsk = openAsk;
window.showResource = showResource;
window.backToBrief = backToBrief;
window.renderBriefSourcesGrouped = renderBriefSourcesGrouped;

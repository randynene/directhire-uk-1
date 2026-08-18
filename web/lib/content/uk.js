/* Every list-shaped string on the UK page. Prose lives in its section
   component; anything that repeats or is likely to be re-ordered lives here. */

export const modal = {
  title: 'Start a search',
  sentTitle: 'Thanks — we’ll be in touch',
  lead: 'Tell us the role. A senior engineer will scope it with you before we search.',
  rolePlaceholder: 'Senior backend engineer, Go and Postgres…',
  sentChecks: [
    'A senior engineer reads the brief today',
    '45-minute scoping call before we search',
    '£3,000 to start, credited in full to the fee',
  ],
};

export const heroChecks = [
  '2 matched profiles, not 200 CVs',
  'A senior engineer interviews every candidate',
  '6-month replacement guarantee',
];

export const shortlist = [
  {
    role: 'Senior AI Engineer',
    meta: 'London · 9 yrs',
    skills: ['Go', 'Postgres', 'AWS', 'Kafka'],
    salary: '£175,000',
  },
  {
    role: 'Senior Full-Stack Engineer',
    meta: 'Manchester · 7 yrs',
    skills: ['TypeScript', 'React', 'Node', 'GraphQL'],
    salary: '£160,000',
  },
];

export const stages = [
  {
    number: '01',
    title: 'Tell us what you need',
    text: 'A senior engineer scopes what you actually need. Your stack, company culture, mission.',
    note: '45 minutes, before we search.',
  },
  {
    number: '02',
    title: 'Interviewed by Engineers',
    text: 'Sourced from networks and referrals, never a job board. Live coding interviews with a senior engineer, CTO sign-off.',
    note: '100+ sourced. Two profiles.',
  },
  {
    number: '03',
    title: 'You pick. They start.',
    text: 'Both arrive with a written report on why they fit. We run scheduling, feedback, the offer — and the counteroffer conversation.',
    note: 'You decide. We handle the mechanics.',
  },
];

export const codeLines = [
  'async function processBatch(jobs) {',
  '  const chunks = chunk(jobs, 250)',
  '  for (const c of chunks) {',
  '    await enqueue(c, { retries: 3 })',
  '  }',
  '}',
  '\u00a0',
  '// "because a retry storm would take',
  '// the write replica down at 250k…"',
];

export const reportTabs = ['Overview', 'CV', 'Tech interview', 'Coding test'];

export const reportScores = [
  { label: 'Coding test', value: 88, verdict: '88%' },
  { label: 'Interview', value: 82, verdict: 'Strong' },
  { label: 'Front-end', value: 46, verdict: 'Fair', caution: true },
];

export const funnelRows = [
  { label: 'Initial sourcing pool', value: 100, display: '100+' },
  { label: 'After CV & AI screening', value: 40, display: '~40' },
  { label: 'After technical interview', value: 15, display: '~15' },
  { label: 'After live pair programming', value: 6, display: '~6' },
  { label: 'You interview both. You hire one.', value: 2, display: '2', final: true },
];

export const deriskItems = [
  'No fee unless you hire',
  '6-month replacement guarantee',
  'Weekly updates, news or not',
  'Anyone we place is off-limits to us, in writing',
];

export const features = [
  {
    icon: 'chevrons',
    title: 'A senior engineer ran the interview',
    text: 'Live pair programming on a real problem, not a keyword match against a job description. You get their name and their notes.',
  },
  {
    icon: 'check',
    title: 'A written report on both finalists',
    text: 'Why they fit, and where they’re a stretch. A candidate with no weaknesses listed just means nobody looked properly.',
  },
  {
    icon: 'arrow',
    title: 'Weekly updates, news or not',
    text: 'Going quiet is the standard in this industry. It shouldn’t be. You hear from us every week the search is open.',
  },
  {
    icon: 'shield',
    title: 'We don’t come back for them',
    text: 'Anyone we place is off-limits to us permanently — and it’s in the contract, not just on this page.',
  },
];

export const pricingRows = [
  { label: 'Example: senior engineer at £140,000', value: '£35,000' },
  { label: 'Paid to start the search, credited in full', value: '− £3,000' },
  { label: 'Due when they start', value: '£32,000', emphasis: true },
];

export const pricingChecks = [
  'It buys a committed search, not a place in a queue',
  'It pays for senior engineer interview time, which isn’t free',
  'It comes straight off the fee when you hire',
];

export const faqItems = [
  {
    q: 'Two candidates? Other recruiters send me ten.',
    a: 'They do — and you read all ten. Two is what’s left after 100+ sourced, a coding assessment on your stack, a live pair-programming session with a senior engineer, and a CTO sign-off. Anyone who didn’t survive that isn’t a candidate, they’re a CV. If neither of the two is right, we go again at no extra cost — the fee is for the hire, not the shortlist.',
  },
  {
    q: 'What if they quit, or it doesn’t work out?',
    a: 'You get a replacement search at no additional fee inside the guarantee window. It is in the contract, not just on this page.',
  },
  {
    q: 'What if they accept and then take a counteroffer?',
    a: 'We run the counteroffer conversation with them before it happens, and we keep the second finalist warm until the start date.',
  },
  {
    q: 'How is this different from the recruiters emailing me every week?',
    a: 'They are paid only on placement, so they send volume. We are paid to run one committed search, and a senior engineer interviews every candidate before you see a name.',
  },
  {
    q: 'Who actually does the technical interview?',
    a: 'A senior engineer, named in the report, with their notes attached.',
  },
  {
    q: 'How do you know they’re not using AI in the interview?',
    a: 'Because it is a live pair-programming session on a real problem, and the follow-up questions are about why they made a choice.',
  },
  {
    q: 'Will you approach them again later?',
    a: 'No. Anyone we place is off-limits to us permanently, in writing.',
  },
  {
    q: 'What does it cost?',
    a: '25% of first-year base salary. £3,000 to start the search, credited in full against the fee.',
  },
  {
    q: 'How long does it take?',
    a: 'Scoping takes 45 minutes. Most searches produce two vetted profiles within a few weeks.',
  },
  {
    q: 'Do you do this in the US?',
    a: 'Yes — direct hire in the US is available alongside UK permanent recruitment.',
  },
];

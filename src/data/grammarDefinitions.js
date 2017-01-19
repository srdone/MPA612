export const CATEGORY = {
  PUNCTUATION: 'Punctuation',
  CORRECT_GRAMMAR_BASICS: 'Correct Grammar Basics'
}

export const grammarDefinitions = [
  {
    title: 'Hyphenate your phrasal adjectives',
    category: CATEGORY.PUNCTUATION,
    description: `
      When two or more words as a unit modify a noun, they must
      be hyphenated, except with: (1) simple phrases formed by
      an -ly adverb. (2) phrases formed with proper nouns or
      foreign words. (3) phrasal adjectives used after the
      modified noun.
    `,
    examples: [
      '25-year-old company',
      'a greatly exaggerated claim',
      'New Zeland exports',
      'our HR manager is risk-averse by nature'
    ]
  },
  {
    title: 'Use a comma before and or or when listing three or more items',
    category: CATEGORY.PUNCTUATION,
    description: `
      Especially needed when sentences become more complex. 
      Recommended because it is sometimes wrong not to use
      it but always right to include it.
    `,
    examples: [
      'red, white, and blue'
    ]
  },
  {
    title: 'Commas and joining compound predicates',
    category: CATEGORY.PUNCTUATION,
    description: `
      With three or more compound predicates, use a comma or
      semicolon to separate them. Do not use them with two
      unless the subject is repeated. When commas are used
      in the predicates, use semicolons as separators.
    `,
    examples: [
      'I stopped by yesterday, and I will call today',
      'I stopped by yesterday and will call today',
      'I wrote him yesterday, stopped by yesterday, and will call today',
      'I wrote him last week; I stopped by yesterday with the paperwork, the deposit check, and the keys; and I will call him today'
    ]
  },
  {
    title: 'No apostrophes to form plural nouns',
    category: CATEGORY.PUNCTUATION,
    description: `
      Except with lowercase letters and capital letters,
      don't use apostrophes to make nouns plural.
    `,
    examples: [
      'Mind your p\'s and q\'s',
      'ATMs',
      '1990s',
      'Please delete the first two ors in a sentence',
      'Mr. and Mrs. Smith are the Smiths'
    ]
  },
  {
    title: 'Don\'t separate subjects and verbs',
    category: CATEGORY.PUNCTUATION,
    description: `
      Keep words and phrases that go together close together.
      Deviations from the rule are used for emphasis.
    `,
    examples: [
      'Maeve Peterson, the new CEO, is..',
      'Ms. Peterson, whose leadership ..., will take the reins ...'
    ]
  },
  {
    title: 'Use bullets, but don`t overuse them',
    category: CATEGORY.PUNCTUATION,
    description: `
      Bullets are used to draw a reader's eye. Should be preceeded
      by an explanatory sentence, be similar in length, have a hanging
      indent, be single spaced, use simple bullets.
    `,
    examples: []
  },
  {
    title: 'Avoid quotes to emphasize words, underlining, boldface overuse, and all caps',
    category: CATEGORY.PUNCTUATION,
    description: `
      Using quotation marks is not clear. They can convey
      the same meaning as prefixing the word with
      "so called", imply that the item is not what it claims to
      be, or to show where a quotation begins.
    `,
    examples: [
      '*Here\'s the "final" schedule',
      '*An "expert" in negotiation'
    ]
  },
  {
    title: 'Don\'t hyphenate most prefixes',
    category: CATEGORY.PUNCTUATION,
    description: `
      American English avoids hyphenating prefixes, even
      when it causes a double letter. Exceptions: (1) to avoid
      an ambiguity, (2) when the root word is a proper noun,
      (3) with certain prefixes (e.g. all-, ex-, self-). 
    `,
    examples: [
      'anteroom',
      'biennial',
      'deselect',
      'cooperate',
      'misspeak',
      're-lease vs release',
      're-sign vs resign',
      'all-inclusive',
      'self-correcting'
    ]
  },
  {
    title: 'Proper uses of long dashes',
    category: CATEGORY.PUNCTUATION,
    description: `
      Long dashes (em-dashes) help set apart parenthetical
      phrases.
    `,
    examples: [
      'Customer Service--it\'s our top priority',
      '... long dashes--called em-dashes--frame'
    ]
  },
  {
    title: 'No commas when writing month and year',
    category: CATEGORY.PUNCTUATION,
    description: `
      No comma should be used when writing just the month
      and year, nor when writing in day-month-year format.
    `,
    examples: [
      'February 2012',
      '23 February 2012',
      'February 23, 2012'
    ]
  },
  {
    title: 'Singular possessives always add an S',
    category: CATEGORY.PUNCTUATION,
    description: `
      Singular possessives always add an S, even when the
      word ends with -s, -z, -x, or -ss. Use apostrophes
      unless it is a pronoun - some of which have a possessive
      form without the S. Plural poessives or singluar
      possessives formed from plural words put the apostrophe
      after the S.
    `,
    examples: [
      'Holtz\'s contract',
      'Xerox\'s patients',
      'mine, our, ours, your, yours',
      'The United Arab Emirates\' campital is Abu Dhabi',
      'the caterers\' fee'
    ]
  },
  {
    title: ''
  }
]
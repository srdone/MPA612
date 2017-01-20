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
      {
        correct: '25-year-old company'
      },
      {
        correct: 'a greatly exaggerated claim'
      },
      {
        correct: 'New Zeland exports'
      },
      {
        correct: 'our HR manager is risk-averse by nature'
      }
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
      {
        correct: 'red, white, and blue'
      }
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
      {
        correct: 'I stopped by yesterday, and I will call today'
      },
      {
        correct: 'I stopped by yesterday and will call today'
      },
      {
        correct: 'I wrote him yesterday, stopped by yesterday, and will call today'
      },
      {
        correct: 'I wrote him last week; I stopped by yesterday with the paperwork, the deposit check, and the keys; and I will call him today'
      }
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
      {
        correct: 'Mind your p\'s and q\'s'
      },
      {
        correct: 'ATMs'
      },
      {
        correct: '1990s'
      },
      {
        correct: 'Please delete the first two ors in a sentence'
      },
      {
        correct: 'Mr. and Mrs. Smith are the Smiths'
      }
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
      {
        correct: 'Maeve Peterson, the new CEO, is..'
      },
      {
        correct: 'Ms. Peterson, whose leadership ..., will take the reins ...'
      }
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
      {
        incorrect: 'Here\'s the "final" schedule'
      },
      {
        incorrect: 'An "expert" in negotiation'
      }
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
      {
        correct: 'anteroom'
      },
      {
        correct: 'biennial'
      },
      {
        correct: 'deselect'
      },
      {
        correct: 'cooperate'
      },
      {
        correct: 'misspeak'
      },
      {
        correct: 're-lease vs release'
      },
      {
        correct: 're-sign vs resign'
      },
      {
        correct: 'all-inclusive'
      },
      {
        correct: 'self-correcting'
      }
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
      {
        correct: 'Customer Service--it\'s our top priority'
      },
      {
        correct: '... long dashes--called em-dashes--frame'
      }
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
      {
        correct: 'February 2012'
      },
      {
        correct: '23 February 2012'
      },
      {
        correct: 'February 23, 2012'
      }
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
      {
        correct: 'Holtz\'s contract'
      },
      {
        correct: 'Xerox\'s patients'
      },
      {
        correct: 'mine, our, ours, your, yours'
      },
      {
        correct: 'The United Arab Emirates\' campital is Abu Dhabi'
      },
      {
        correct: 'the caterers\' fee'
      }
    ]
  },
  {
    title: 'Handling Pronouns',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      I, we, he, and she are subjects of phrases. Me, us, 
      him, and her are objects of either verbs or prepositions.
      To test with compound phrasings, try leaving out the named
      subject.
    `,
    examples: [
      {
        correct: 'She placed an order with Megan and me',
        incorrect: 'She placed an order with Megan and I'
      },
      {
        correct: 'This is he',
        incorrect: 'This is him'
      },
      {
        correct: 'Who may I say is calling?',
        incorrect: 'Whom may I say is calling?'
      }
    ]
  },
  {
    title: 'Subject-verb disagreement',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      Verbs must agree in person and number with the
      subject. 'There' causes issues because it appears to
      be a subject but is not - it is an expletive (a word
      that stands in for the subject in an inverted sentence).
      Objects of prepositional phrases are never the subject,
      but can be confusing because they are nearer the verb.
      In compound subjects with either/or, neither/nor, the 
      verb must match the number of the noun that follows the
      or or nor.
    `,
    examples: [
      {
        incorrect: 'There is always risk and liability considerations to take into account.',
        correct: 'There are always risk and liability considerations to take into account.'
      },
      {
        incorrect: 'There is many options to avoid a takeover.',
        correct: 'There are many options to avoid a takeover.'
      },
      {
        incorrect: 'The details of the customized work is delaying the project.',
        correct: 'The details of the customized work are delaying the project.'
      },
      {
        incorrect: 'The source of our replacement parts and maintenance have not been selected yet.',
        correct: 'The source for our replacement parts and maintenance has not been selected yet.'
      },
      {
        incorrect: 'Special services or a new product target a niche market.',
        correct: 'Special services or a new product targets a niche market.'
      },
      {
        incorrect: 'Special services or a new product targets a niche market.',
        correct: 'Neither the education fund nor the training costs are without budget constraints.'
      }
    ]
  },
  {
    title: 'Noun-pronoun disagreement',
    description: `
      A pronoun must have the same gender and number as the subject.
      When the gender isn't clear, don't use 'their' and avoid Using
      only one of the gendered pronouns (e.g. her). Instead, get
      creative with how you construct the sentence. When the subject
      of a sentence is a singluar pronoun such as either, neither,
      each, or every, other nouns accompanying it may have no effect
      on the number of the verb.
    `,
    examples: [
      {
        incorrect: 'A shareholder may cast their vote for only one member of the board',
        correct: 'A shareholder may cast his or her vote for only one member of the board'
      },
      {
        incorrect: `Either the receptionist or the sales assistant will have to
        change their lunch hour so that at least one will be in the office at all times`,
        correct: `Either the receptionist or the sales assistant will have to start
        taking lunch earlier or later so that at least one will be in the office at all times.`
      },
      {
        incorrect: 'Have either of our clients arrived yet?',
        correct: 'Has either of our clients arrived yet?'
      }
    ]
  },
  {
    title: 'Double negatives',
    description: `
      Only use double negatives when you mean to negate the first one.
      It is incorrect to use two negatives in order to intensify them.
      An example that is tricky is not ... but
    `,
    examples: [
      {
        incorrect: `We couldn't scarcely manage to keep up with the demand.`,
        correct: `We could scarcely manage to keep up with the demand.`
      },
      {
        incorrect: `The clerk couldn't help but call the manager for advice.`,
        correct: `The clerk couldn't help calling the manager for advice.`
      }
    ]
  }
]
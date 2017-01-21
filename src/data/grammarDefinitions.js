export const CATEGORY = {
  PUNCTUATION: 'Punctuation',
  CORRECT_GRAMMAR_BASICS: 'Correct Grammar Basics',
  DONT_ANESTHETIZE_YOUR_READERS: `Don't anesthetize your readers.`,
  MUST_KNOW_GRAMMAR_RULES: `A dozen grammatical rules you absolutely need to know`
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
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
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
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
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
  },
  {
    title: 'Nonstandard vocabulary',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      Always use standard english, not dialect.
    `,
    examples: [
      {
        incorrect: `Where's the meeting at?`,
        correct: `Where's the meeting?`
      },
      {
        incorrect: `Me and Kim will handle the Brewster account.`,
        correct: `Kim and I will handle the Brewster account.`
      },
      {
        incorrect: `They shouldn't of submitted those incomplete reports`,
        correct: `They shouldn't have submitted those incomplete reports`
      }
    ]
  },
  {
    title: 'Use pronouns skillfully',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Don't overuse I, lean heavily on we, our, you, and your. Write
      directly to you, the person you're trying to reach.
    `,
    examples: [
      {
        incorrect: 'This applies to citizens over 65',
        correct: `If you're over 65, this applies to you.`
      }
    ]
  },
  {
    title: 'Use contractions',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      It isn't incorrect to use contractions. But don't overuse them.
      If you would say something as a contraction, write it that way.
      If not, don't.
    `,
    examples: [
      {
        incorrect: 'We will inform all winners by telephone',
        correct: `We'll call you if you win`
      }
    ]
  },
  {
    title: 'Avoid passive voice',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Avoid passive voice. Sometimes it is the most natural way or
      can't be avoided. This helps avoid convoluted sentences.
    `,
    examples: [
      {
        incorrect: `The closing documents were prepared by Sue`,
        correct: `Sue prepared the closing documents`
      }
    ]
  },
  {
    title: 'Vary the length and structure of your sentences',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Monotony creates boredom. Vary the length and structure of sentences.
    `
  },
  {
    title: 'Avoid alphabet soup',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Acroynyms are tiresome, especially when readers aren't familiar with them.
      They cause readers to search for the definition, breaking the flow of the
      writing. Stick to words whn you can.
    `
  },
  {
    title: 'You can start a sencence with And or But',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      And and But are very effective transitions, much better than
      words like Additionally and However.
    `
  },
  {
    title: 'You can end a sentence with a preposiition',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Ending sentences with prepositions often feels far more natural,
      and there is nothing wrong with it. The only drawback is that it
      is not a natural way to end a sentence.
    `
  },
  {
    title: 'Good vs Well',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      When describing performance, manner, action, etc., use Well.
      Using Good in the place of Well is ungrammatical. There are only
      a few set phrases where you can use Good as an adverb.
    `,
    examples: [
      {
        correct: 'The intern works well under pressure',
        incorrect: 'The intern works good under pressure'
      },
      {
        correct: 'A good many more'
      }
    ]
  },
  {
    title: 'The subject of the sentence determines the number of the verb',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      A subject and its verb must both be either singular or plural.
      Prepositional prhases modifying the subject can cause confustion.
      Using There as a subject stand in also causes confusion, as the true
      subject in this case always follows the verb.
    `,
    examples: [
      {
        correct: `The company's bread and butter is still shipping`,
        incorrect: `The company's bread and butter are still shipping`
      },
      {
        correct: `There go our fourth quarter profits`,
        incorrect: `There goes our fourth quarter profits`
      }
    ]
  },
  {
    title: 'Both either and neither as subjects take singular verbs',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Don't be distracted by prepositional phrases containing plural
      objects. The subject (either or neither) is still singular.
    `,
    examples: [
      {
        correct: `Either of the marketing plans involves capital investment`,
        incorrect: `Either of the marketing plans involve capital investment`
      }
    ]
  },
  {
    title: 'With neither/nor and either/or, the second element controls the number of the verb',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      When either/or, neither/nor is in the subject position, the second element
      controls the plurality of the verb.
    `,
    examples: [
      {
        correct: `Neither the regional managers nor the vice president for sales
        likes the proposed campaign's theme.`,
        incorrect: `Neither the regional managers nor the vice president for sales
        like the proposed campaign's theme.`
      }
    ]
  }
]
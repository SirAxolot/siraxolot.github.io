category_names = [
'template',
'nouns',
'actions',
'actions-singular',
'people',
'places',
'descriptor'
];

data = `
#template:
cosplaying as @people@
cosplaying as <a> @nouns@
@actions@ @people@
@actions@ <a> @nouns@
@actions@ <a> @descriptor@ @nouns@
@actions-singular@
cosplaying as @people@ [at,next to] @places@
cosplaying as <a> @nouns@ [at,next to] @places@
@actions@ @people@ at @places@
@actions@ <a> @nouns@ [at,next to] @places@
@actions@ <a> @descriptor@ @nouns@ [at,next to] @places@
@actions-singular@ [at,next to] @places@
#end

#nouns:
catgirl
catboy
younger version of themselves
poor old woman
iphone
artist
nsfw artist
burger
alternate
slice of cheese
gay couple
straight couple
protogen
dude
lesbian
bisexual
frog
dog
cat
fish
ball
bunny
cockroach
moth
butterfly
skeleton
cow
deviantart drawing
guy
deer
coin
statue
#end

#descriptor:
really buff
homosexual
unfortunate
thicc
bad
delicious
red
orange
yellow
green
blue
purple
grayscale
cool
awesome
#end

#people:
their mom
their dad
their grandpa
their cousin
the lgbtq community
the void
Sonic, Knuckles, and Tails
Dr. Habit
Kanye West
their significant other
Bill Cipher
some regular dude
jinx the cat
their computer
whatever the hell that thing is
Sans Undertale
SaltyDKDan
twitter
their idol
your mom
nothing
talking ben
their drawing tablet
barack obama
flappy bird
sonic the hedgehog
the funniest thing
god
jesus
kirby
the entire population of america
the entirety of new york
new zealand
markiplier
themselves
Scaramouche
Paimon
Gorou
Donkey Kong
Omori
the Discord logo
Homer Simpson
Bea Santello
Glamrock Freddy
Muffet from Undertale
Harambe
Chuck E. Cheese
Cuphead
Mugman
Rayman
at least 734 McNuggets
Nikocado Avocado
Yae Miko
#end

#actions:
accepting
achieveing
acquiring
activating
addressing
administering
admiring
admitting
adopting
agreeing with
alerting
alighting
allowing
altering
amusing
analyzing
announcing
annoying
answering to
anticipating
apologizing to
applauding
applying
appointing
appraising
appreciating
approving
arguing with
arranging
arresting
arriving
ascertaining
assembling
assessing
assisting
attacking
attaining
attracting
avoiding
awakening
backing
baking
balancing
banning
banging
baring
batting
bathing
battling
beaming
bearing
beating
becoming
begging
beginning
beholding
belonging to
bending
besetting
betting on
bidding for
binding
biting
bleaching
blessing
blinding
blotting
blowing
boiling
bolting
bombing
booking
boring
borrowing
bouncing
bowing
boxing
branching
breaking
breathing
briefing
bringing
broadcasting
bruising
brushing
bubbling
budgeting
building
bumping
burning
bursting
burying
burping
buying
buzzing
calculating
calling
camping
caring
carrying
carving
casting
cataloging
catching
causing
challenging
changing
charging
charting
chasing
cheating
checking
cheering
chewing
choking
choosing
chopping
claiming
claping
clarifying
classifying
cleaning
clearing
clinging
clipping
closing
clothing
coaching
coiling
collecting
coloring
combing
coming
commanding
communicating
comparing
competing
compiling
complaining
completing
composing
computing
conceiving
concentrating
conceptualizing
concerning
concluding
conducting
confessing
confronting
confusinging
connecting
conserving
considering
consisting
consolidating
constructing
consulting
containing
continuing
contracting
controlling
converting
coordinating
copying
correcting
correlating
costing
coughing
counseling
counting
covering
cracking
crashing
crawling
creating
creeping
critiquing
crossing
crushing
crying
curing
curling
curving
cutting
cycling
damning
damaging
dancing
daring
dealing
decaying
deceiving
deciding
decorating
defining
delaying
delegating
delighting
delivering
demonstrating
depending
describing
deserting
deserving
designing
destroying
detailing
detecting
determining
developing
devising
diagnosing
digging
directing
disagreeing
disappearing
disapproving
disarming
discovering
disliking
dispensing
displaying
disproving
dissecting
distributing
diving
diverting
dividing
doing
doubling
doubting
drafting
dragging
draining
dramatizing
drawing
dreaming
dressing
drinking
dripping
driving
dropping
drowning
drumming
drying
dusting
dwelling
earning
eating
editing
educating
eliminating
embarrassing
employing
emptying
enacting
encouraging
ending
enduring
enforcing
engineering
enhancing
enjoying
enlisting
ensuring
entering
entertaining
escaping
establishing
estimating
evaluating
examining
exceeding
exciting
excusing
executing
exercising
exhibiting
existing
expanding
expecting
expediting
experimenting
explaining
exploding
expressing
extending
extracting
facing
facilitating
fading
failing
fancying
farting
fastening
faxing
fearing
feeding
feeling
fencing
fetching
fighting
filing
filling
filming
finalizing
financing
finding
firing
fitting
fixing
flapping
flashing
fleeing
flinging
floating
flooding
flowing
flowering
flying
folding
following
fooling
forbidding
forcing
forecasting
foregoing
foreseeing
foretelling
forgeting
forgiving
forming
formulating
forsaking
framing
freezing
frightening
frying
gathering
gazing
generating
getting
giving
glowing
gluing
going
governing
grabbing
graduating
grating
greasing
greeting
grinning
grinding
gripping
groaning
growing
guaranteeing
guarding
guessing
guiding
hammering
handing
handling
handwriting
hanging
happening
harassing
harming
hating
haunting
heading
healing
heaping
hearing
heating
helping
hiding
hitting
holding
hooking
hopping
hoping
hovering
hugging
humming
hunting
hurrying
hurting
hypothesizing
identifying
ignoring
illustrating
imagining
implementing
impressing
improving
improvising
including
increasing
inducing
influencing
informing
initiating
injecting
injuring
inlaying
innovating
inputting
inspecting
inspiring
installing
instituting
instructing
insuring
integrating
intending
intensifying
interesting
interfering
interlaying
interpreting
interrupting
interviewing
introducing
inventing
investigating
inviting
irritating
itching
jailing
jamming
jogging
joining
joking
judging
juggling
jumping
justifying
keeping
kicking
killing
kissing
kneeling
knitting
knocking
knotting
knowing
labeling
landing
lasting
laughing
launching
laying
leading
leaning
leaping
learning
leaving
lecturing
lending
letting
leveling
licensing
licking
lying
lifting
lighting
lightening
liking
listing
listening
livinging
loading
locating
locking
logging
longing
looking
losing
loving
maintaining
making
manning
managing
manipulating
manufacturing
mapping
marching
marking
marketing
marrying
matching
mating
mattering
meaning
measuring
meddling
mediating
meeting
melting
memorizing
mending
mentoring
milking
mining
misleading
missing
misspelling
mistaking
misunderstanding
mixing
moaning
modeling
modifying
monitoring
mooring
motivating
mourning
moving
mowing
muddling
mugging
multiplying
murdering
nailing
naming
navigating
needing
negotiating
nesting
nodding
nominating
normalizing
noting
noticing
numbering
obeying
objecting
observing
obtaining
occuring
offending
offering
officiating
opening
operating
ordering
organizing
orienting
originating
overcoming
overdoing
overdrawing
overflowing
overhearing
overtaking
overthrowing
owing
owning
packing
paddling
painting
parking
parting
participating
passing
pasting
patting
pausing
paying
pecking
pedaling
peeling
peeping
perceiving
perfecting
performing
permitting
persuading
phoning
photographing
picking
piloting
pinching
pining
pinpointing
pioneering
placing
planning
planting
playing
pleading
pleasing
plugging
pointing
poking
polishing
popping
possessing
posting
pouring
practicing
praising
praying
preaching
preceding
predicting
prefering
preparing
prescribing
presenting
preserving
preseting
presiding
pressing
pretending
preventing
pricking
printing
processing
procuring
producing
professing
programing
progressing
projecting
promising
promoting
proofreading
proposing
protecting
proving
providing
publicizing
pulling
pumping
punching
puncturing
punishing
purchasing
pushing
putting
qualifying
questioning
queuinging
quitting
racing
radiating
raining
raising
ranking
rating
reaching
reading
realigning
realizing
reasoning
receiving
recognizing
recommending
reconciling
recording
recruiting
reducing
refering
reflecting
refusing
regretting
regulating
rehabilitating
reigning
reinforcing
rejecting
rejoicing
relating
relaxing
releasing
relying
remaining
remembering
reminding
removing
rendering
reorganizing
repairing
repeating
replacing
replying
reporting
representing
reproducing
requesting
rescuing
researching
resolving
responding
restoring
restructuring
retiring
retrieving
returning
reviewing
revising
rhyming
riding
ringing
rinsing
rising
risking
robbing
rocking
rolling
rotting
rubbing
ruining
ruling
running
rushing
sacking
sailing
satisfying
saving
sawing
saying
scaring
scatterring
scheduling
scolding
scorching
scraping
scratching
screaming
screwing
scribbling
scrubbing
sealing
searching
securing
seeing
seeking
selecting
selling
sending
sensing
separating
serving
servicing
setting
settling
sewing
shading
shaking
shaping
sharing
shaving
shearing
shedding
sheltering
shining
shivering
shocking
shoeing
shooting
shopping
showing
shrinking
shrugging
shutting
sighing
signing
signaling
simplifying
sinning
singing
sinking
sipping
sitting
sketching
skiing
skipping
slapping
slaying
sleeping
sliding
slinging
slinking
slipping
slitting
slowing
smashing
smelling
smiling
smiting
smoking
snatching
sneaking
sneezing
sniffing
snoring
snowing
soaking
solving
soothing
sorting
sounding
sowing
sparing
sparking
sparkling
speaking
specifying
speeding
spelling
spending
spilling
spinning
spitting
splitting
spoiling
spotting
spraying
spreading
springing
sprouting
squashing
squeaking
squealing
squeezing
staining
stamping
standing
staring
starting
staying
stealing
steering
stepping
sticking
stimulating
stinging
stinking
stirring
stitching
stopping
storing
strapping
streamlining
strengthening
stretching
striding
striking
stringing
stripping
striving
stroking
structuring
studying
stuffing
subletting
subtracting
succeeding
suffering
suggesting
suiting
summarizing
supervising
supplying
supporting
supposing
surprising
surrounding
suspecting
suspending
swearing at
sweating
sweeping
swelling
swimming
swinging
switching
symbolizing
synthesizing
systemizing
tabulating
taking
talking to
taming
tapping
taping
targeting
tasting
teaching
tearing
teasing
telephoning
telling
tempting
terrifying
testing
thanking
thawing
thinking
thriving
throwing
thrusting
ticking
tickling
tying
timing
tipping
tiring
touching
touring
towing
tracing
trading
training
transcribing
transferring
transforming
translating
transporting
trapping
traveling
treading
treating
trembling
tricking
tripping
trotting
troubling
troubleshooting
trusting
trying
tugging
tumbling
turning
tutoring
twisting
typing
undergoing
understanding
undertaking
undressing
unfastening
unifying
uniting
unlocking
unpacking
untidying
updating
upgrading
upholding
upsetting
using
utilizing
vanishing
verbalizing
verifying
vexing
visit
voring (im sorry)
wailing
waiting
waking
walking
wandering
wanting
warming
warning
washing
wasting
watching
watering
waving
wearing
weaving
weeding
weeping
weighing
welcoming
wending
wetting
whining
whipping
whirling
whispering
whistling
winning
winding
winking
wiping
wishing
withdrawing
withholding
withstanding
wobbling
wondering
working
worrying
wrapping
wrecking
wrestling
wriggling
wringing
writing
x-raying
yawning
yelling at
zipping
zooming towards
#end

#actions-singular:
apologizing
applauding
arising
awakening
baking
balancing
batting
bathing
battling
begging
behaving
bending
bidding
blinking
blushing
boasting
boiling
bouncing
bowing
boxing
breaking
breathing
burning
bursting
burping
busting
buzzing
calculating
camping
charging
charting
cheating
cheering
chewing
choking
clapping
cleaning
coloring
complaining
composing
concentrating
conducting
confessing
coughing
counseling
counting
cracking
crashing
crawling
creating
creeping
critiquing
crying
cycling
dancing
decaying
decorating
digging
directing
disappearing
diving
doubling
drawing
dreaming
dressing
drinking
dripping
driving
dropping
drowning
drumming
drying
dusting
eating
editing
exercising
existing
expanding
experimenting
exploding
fading
failing
farting
fencing
fetching
fighting
filming
floating
flying
folding
forecasting
freezing
frying
gazing
glowing
graduating
grinning
groaning
growing
hiding
hopping
hovering
humming
hunting
interviewing
inventing
investigating
itching
jamming
jogging
joking
juggling
jumping
kicking
killing
kissing
kneeling
knitting
knotting
labeling
landing
laughing
launching
laying
leaning
leaping
learning
leaving
lecturing
lying
loading
longing
looking
losing
loving
marching
marrying
measuring
melting
memorizing
mentoring
milking
mining
misspelling
mixing
moaning
modeling
mourning
moving
mowing
mugging
multiplying
murdering
negotiating
nodding
numbering
observing
organizing
overflowing
packing
paddling
painting
parking
partying
patting
pausing
paying
pecking
pedaling
peeling
peeping
performing
photographing
picking
piloting
planning
planting
playing
pleading
pointing
popping
praying
preaching
programming
promising
proposing
pumping
punching
purchasing
questioning
quitting
racing
radiating
reaching
reading
rejoicing
relaxing
remembering
reorganizing
retiring
rhyming
rising
robbing
rocking
rolling
rotting
running
rushing
sawing
saying
scratching
screaming
scribbling
sewing
shaking
shaving
shedding
shining
shivering
shooting
shopping
shrinking
shrugging
sighing
sinning
singing
sinking
sipping
sitting
sketching
skiing
skipping
slaying
sleeping
sliding
slipping
smiling
smoking
sneaking
sneezing
sniffing
snoring
sparkling
speaking
speeding
spelling
spending
spinning
spitting
splitting
squeaking
squealing
squeezing
stamping
standing
staring
stealing
stepping
sticking
stretching
stripping
studying
succeeding
suffering
swearing
sweating
sweeping
swelling
swimming
swinging
teasing
testing
thanking
thinking
thrusting
tipping
tracing
traveling
trembling
tripping
tumbling
turning
tutoring
twisting
typing
undressing
unpacking
untidying
vanishing
wailing
waiting
walking
wandering
watching
waving
weeping
whining
whipping
whistling
wobbling
wondering
working
worrying
wriggling
wringing
writing
yawning
yelling
#end

#places:
an Arby's
a Burger King
Disney Land
a Chipotle
a Crispy Creme
a bus stop
your mom's house
a McDonalds
a gas station
#end
`;
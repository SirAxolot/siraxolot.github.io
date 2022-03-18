category_names = [
'template',
'nouns',
'actions',
'actions-singular',
'people',
'places',
'descriptor',
'numbers',
'phrase'
];

data = `
#template:
@actions@ @people@
@actions@ <a> @nouns@
@actions@ <a> @descriptor@ @nouns@
@actions-singular@
@actions@ @people@ @places@
@actions@ <a> @nouns@ @places@
@actions@ <a> @descriptor@ @nouns@ @places@
@actions-singular@ @places@
@actions@ @numbers@ @nouns:plural@
@actions@ @numbers@ @people:plural@
@actions@ @numbers@ @nouns:plural@ @places@
@actions@ @numbers@ @people:plural@ @places@
#end

#nouns:
goldfish
poor old woman
iphone
artist
burger
slice of cheese
protogen
dude
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
guy
deer
coin
statue
rock
stick
bone
keyboard
cupcake
cake
DJ
#end

#descriptor:
really buff
unfortunate
plump
fat
bad
cheeky
red
orange
yellow
green
blue
purple
grayscale
cool
awesome
cute
reluctant
eager
depressed
@nouns@-obsessed
nervous
embarassed
crying
tiny
quirky
one-eyed
bored
ambitious
power-hungry
two-headed
wise
elderly
greedy
invisible
magical
blind
peace-loving
polite
worried
rude
genetically [modified, enhanced]
grumpy
charming
energetic
imaginary
friendly
#end

#people:
their mom
their dad
their grandpa
their cousin
the void
Sonic
Knuckles
Tails
Rouge the Bat
Big the Cat
Dr. Habit
Kanye West
Bill Cipher
some regular dude
jinx the cat
their computer
Sans Undertale
SaltyDKDan
their idol
your mom
nothing
talking Ben
their drawing tablet
Barack Obama
flappy bird
god
jesus
kirby
the entire population of [America, Russia, Asia, Scotland]
the entirety of new york
New Zealand
markiplier
themself
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
Yae Miko
Toy Chica
Roxxane Wolf
Glamrock Chica
Montgomery Gator
Papyrus
Alphys
Undyne
W.D. Gaster
Noelle
#end

#actions:
accepting
achieveing
acquiring
activating
addressing
admiring
admitting
adopting
agreeing with
alerting
alighting
altering
amusing
analyzing
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
rearranging
arresting
assembling
assessing
assisting
attacking
attaining
attracting
avoiding
awakening
baking
balancing
banning
banging
batting
bathing
battling
beaming
beating
becoming
begging for
beholding
belonging to
bending
betting on
bidding for
biting
bleaching
blessing
blinding
blotting
blowing
boiling
bolting towards
bombing
booking
boring
borrowing
bouncing
bowing to
boxing with
branching out to
breaking
breathing on
bringing
broadcasting
bruising
brushing
budgeting
building
bumping
burning
bursting
burying
burping
buying
calling
camping with
caring for
carrying
carving
catalouging
catching
challenging
changing
charging
chasing
cheating on
checking on
cheering for
chewing
choking
choosing between [<a> @noun@,@person@] and
chopping
claiming
clapping for
clarifying
classifying
cleaning
clinging onto
clipping
closing
putting clothes on
coaching
coiling
collecting
coloring
combing
commanding
communicating with
comparing themselves to
competing against
conceiving
concentrating on
conceptualizing
confessing to
confronting
confusing
connecting with
considering
consolidating
constructing
consulting
containing
controlling
converting
copying
correcting
coughing on
covering
cracking open
crashing into
crawling [under,over,next to,towards]
creating
creeping [under,over,next to,towards]
critiquing
crossing
crushing
crushing [<a> @nouns@, @person@] with
crying
curing
cutting
cycling with
damning
damaging
dancing with
dealing with
deceiving
decorating
delegating with
delighting
delivering
depending
describing
deserting
designing
destroying
detailing
detecting
developing
directing
disagreeing with
disapproving of
disarming
discovering
disliking
dispensing
displaying
dissecting
distributing
diving into
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
dreaming about
dressing up as
drinking
driving towards
dropping
drowning
drying
dusting
earning
eating
editing
educating
eliminating
embarrassing
employing
emptying
encouraging
ending
engineering
enhancing
enjoying
entering
entertaining
escaping
establishing
evaluating
examining
exciting
excusing
executing
exercising with
expanding
expecting
expediting
experimenting on
explaining what [<a> @nouns@,@people@] is to
exploding
extending
extracting
facing
facilitating
failing
farting on
faxing
fearing
feeding
feeling
fencing
fetching
fighting
filling
filming
financing
finding
firing at
fixing
fleeing from
flinging
floating
flooding
flowering
flying
folding
following
fooling
forcing
forgetting about
forgiving
forming
framing
freezing
frightening
frying
gathering
gazing at
generating
getting
giving [<a> @nouns@,@people@,you]
going to
grabbing
graduating with
greasing
greeting
grinning at
grinding
gripping
groaning
guarding
guiding
hammering
handing [<a> @nouns@,@people@,you]
handling
hanging
harassing
harming
hating
haunting
heading towards
healing
hearing
heating
helping
hiding from
hitting
holding
hovering above
hugging
hunting
hurting
identifying
ignoring
illustrating
imagining
impressing
improving
increasing
inducing
inflating 
influencing
injecting
injuring
inspecting
inspiring
installing
intensifying
interrupting
interviewing
inventing
investigating
irritating
itching
jailing
jogging with
joking about
judging
juggling
jumping on
justifying
keeping
kicking
killing
kissing
knitting
knocking on
knotting
labeling
landing on
laughing at
launching
laying
leaning on
leaping [towards, away from]
learning about
leaving
lecturing
leveling up
licensing
licking
lying to
lifting up
lighting
liking
listening to
locating
locking up
longing for
looking at
losing
loving
maintaining
making
managing
manipulating
manufacturing
marching [towards,away from]
marking
marketing
marrying
matching with
measuring
mediating on
meeting with
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
moaning at
modeling
modifying
monitoring
motivating
mourning the loss of
moving
mowing
mugging
multiplying
murdering
nailing
naming
needing
negotiating with
noticing
obeying
observing
obtaining
offending
opening
operating
ordering
organizing
originating
overcoming
overdrawing
overhearing
overtaking
overthrowing
owning
packing
painting
parking
parting with
passing by
patting
pausing
paying
pecking at
peeling
perceiving
perfecting
permitting
persuading
phoning
photographing
picking up
placing
planting
playing with
pleading for
pleasing
plugging in
pointing at
poking at
polishing
popping
possessing
posting
praising
praying to
preaching to
predicting
preparing
presenting
preserving
pressing
pretending to be
pricking
printing
producing
programming
progressing
projecting onto
promoting
proofreading
proposing to
protecting
providing
publicizing
pulling on
pumping
punching
puncturing
punishing
purchasing
pushing
putting down
questioning
queuing
racing
raising
ranking
rating
reaching for
reading a book about
realigning
reasoning with
attempting to reason with
receiving
recognizing
recommending
recording
reflecting
refusing
regulating
rehabilitating
reinforcing
rejecting
relating to
relaxing
releasing
relying on
remembering
reminding
removing
rendering
reorganizing
repairing
replacing
replying to
reporting
representing
requesting
rescuing
researching
responding to
restoring
restructuring
retrieving
returning
reviewing
riding
rinsing
robbing
rocking
rolling
rubbing
ruining
running [towards,past,away from]
rushing [towards,past,away from]
sacking
satisfying
saving
scaring
scatterring
scolding
scorching
scraping
scratching
screaming at
screwing
scrubbing
searching for
seeing
selecting
selling
sensing
separating from
serving
servicing
sewing
shading
shaking
shaving
sheltering
shivering
shocking
shooting
shopping with
shrinking
shuttin
simplifying
sinking
sipping
sitting on
sketching
slapping
slaying
sleeping with
smashing
smelling
smiling at
smiting
snatching
sniffing
soaking
soothing
sparing
speeding by
spinning
spitting on
splitting
spoiling
spotting
spraying
squashing
squeezing
stamping
staring at
stealing
stepping on
stimulating
stinging
stitching
stopping
strengthening
stretching
striking
stringing
studying
stuffing
suiting
summarizing
supervising
supplying
supporting
surprising
surrounding
suspending
swearing at
swimming with
swinging at
symbolizing
synthesizing
taking
talking to
taming
tapping
taping
targeting
tasting
teaching
teasing
telephoning
tempting
terrifying
testing
thanking
thawing
thinking about
throwing
tickling
tying
timing
tipping
tiring
touching
towing
tracing
trading with
training
transforming
transporting
trapping
treating
tricking
tripping over
troubling
troubleshooting
trusting
tugging on
turning
tutoring
twisting
understanding
undressing
unlocking
updating
upgrading
upsetting
using
vexing
visiting
waiting for
walking [towards,past,away from]
wandering [towards,past,away from]
wanting
warming
warning
washing
watching
watering
wearing
weeding
weighing
welcoming
whining about
whipping
whirling
whispering to
winning
wiping
wishing for
working for
worrying about
wrecking
wrestling
wringing
writing
x-raying
yelling at
zipping [towards,past,away from]
zooming [towards,past,away from]
#end

#actions-singular:
apologizing
applauding
arising
awakening
baking
balancing
batting
battling
begging
behaving
bending
bidding
blinking
blushing
boasting
bouncing
bowing
boxing
breaking
breathing
bursting
buzzing
calculating
camping
charging
charting
cheating
cheering
chewing
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
writing a [positive,negative] review on their [favorite,least favorite] [game,book,movie]
yawning
yelling
giving birth (sorry)
#end

#places:
at an Arby's
at Burger King
at Disney Land
at Chipotle
at Crispy Creme
at a bus stop
at McDonalds
at a gas station
while @actions@ them
#end

#numbers:
[2,3,4,5,6,7,8,9,10]
a hundred
a thousand
a million
a billion
infinite
#end

#phrase:
Trans rights
Your mom
I'm gay
You're gay
Not Funny
#end
`;
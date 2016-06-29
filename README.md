# BuildStarter

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://salty-lake-96978.herokuapp.com/

## Minimum Viable Product

BuildStarter is a web application inspired by Kickstarter that will be built using Ruby on Rails and React.js.  BuildStarter allows users to crowdfund real estate investments.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Hosting on Heroku
- [ ] Projects
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Ability to back a Project / Choose a price level
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Ability to search for Projects
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
-  [ ] Categories for projects
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Project Model, API, and basic APIUtil (1.5 days)

**Objective:** Projects can be created and read through
the API.

- [ ] create `Project` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for projects (`ProjectController`)
- [ ] jBuilder views for projects
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Projects can be created, read, and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each project component, building out the flux loop as needed.
  - [ ] `BrowserSelector`
  - [ ] `BrowserIndex`
  - [ ] `BrowserIndexItem`
  - [ ] `ProjectDetailIndex`
  - [ ] `ProjectDetailIndexItem`
  - [ ] `ProjectForm`
- [ ] save Projects to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Project creation and funding (1 day)

**Objective:** Projects can be created and invested in.

- build out API, Flux loop, and components for:
  - [ ] ProjectFormTabs
  - [ ] ProjectFormTabItem
  - [ ] ContributeForm

- Use CSS to style new views

### Phase 6: Splash page and navigation (1 day)

**Objective:** Splash page cycles through photos and navigation allows users to find projects quickly.

- [ ] create `Tag` model and join table
- build out Flux loop, and components for:
  - [ ] SplashIndex
  - [ ] SplashIndexItem
- Use CSS to style new views

### Phase 7: Project Likes, Comments, Edits (2 days)

**objective:** All projects can receive likes, comments, or edits.

- [ ] create models and join tables for Like, Comment, and Edit
- build out API, Flux loop, and components for:
  - [ ] fetching likes, comments, and edits for projects
  - [ ] adding likes, comments, and edits for projects
- [ ] Style the new elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search based on risk (calculated via expected ROI)
- [ ] Pagination / infinite scroll for Projects Index
- [ ] Hoverable YOY graphs
- [ ] Mapping of property

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md

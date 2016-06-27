## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **NavbarApp**
    * SearchIndex
    * LoginForm (modal)
  * **SplashCarouselApp**
  * **Main**
    * BrowserApp
    * **ProjectDetailApp**
      * ProjectDetailIndex
      * ProjectDetailIndexItem

## Routes

* **component:** `App` **path:** `/`
  * **component:** `NavbarApp` **path:** index
  * **component:** `SplashCarouselApp` **path:** index
    * **component:** `BrowserApp` **path:** `discover/`
    * **component:** `ProjectDetailApp` **path:** `discover/:projectId`
    * **component:** `ProjectFormApp` **path:** `build/`

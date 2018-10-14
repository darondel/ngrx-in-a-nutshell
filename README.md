# NGRX IN A NUTSHELL

Reusable [Angular](https://github.com/angular/angular) application to quickly introduce [Redux](https://github.com/reduxjs/redux) with two parts:

- A presentation with all core concepts.
- A demonstration through [NgRx](https://github.com/ngrx/platform), inspired by [Redux](https://github.com/reduxjs/redux).

### Included

- [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) - RxJS powered state management for [Angular](https://github.com/angular/angular) applications, inspired by [Redux](https://github.com/reduxjs/redux).
- [@ngrx/effects](https://github.com/ngrx/platform/blob/master/docs/effects/README.md) - Side effect model for [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md).
- [@ngrx/router-store](https://github.com/ngrx/platform/blob/master/docs/router-store/README.md) - Bindings to connect the Angular Router to [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md).
- [@ngrx/entity](https://github.com/ngrx/platform/blob/master/docs/entity/README.md) - Entity State adapter for managing record collections.
- [@ngrx/store-devtools](https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md) - Instrumentation for [@ngrx/store](https://github.com/ngrx/platform/blob/master/docs/store/README.md) enabling a [powerful time-travelling debugger](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
- [@angular/material](https://github.com/angular/material2) - Material Design for [Angular](https://github.com/angular/angular) applications.

### Quick start

```bash
# Clone the repository
git clone https://github.com/darondel/ngrx-in-a-nutshell.git

# Go to the project directory
cd ngrx-in-a-nutshell

# Install the dependencies
npm install

# Start the server
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

_NOTE:_ the above setup instructions assume you have added local npm bin folders to your path.
If this is not the case you will need to install the [Angular CLI](https://github.com/angular/angular-cli) globally.

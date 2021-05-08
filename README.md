# Angular + Bootstrap with ngx-bootstrap sample project #

This project is a simple sample of how to use Bootstrap with Angular.

## About Bootstrap ##

Bootstrap is the most popular CSS Framework for developing responsive and mobile-first 
websites.

See [https://getbootstrap.com/](https://getbootstrap.com/)

## About Angular ##

Angular is a web front-end framework lead by the Angular team from Google.

See [https://angular.io/](https://angular.io/)

## About NGX-bootstrap ##

NGX-bootstrap is a library that provides Angular modules for using the javascript
components that provide functionality that, originally, is provided by bootstrap with
third party javascript libraries.

If you are designing a plain website or web application that hasn't its front-end based 
on Angular and you are using bootstrap as your CSS framework, you will probably need to
depend on the javascript jQuery and Popper.js libraries to be able to use the dynamic
javascript properties of bootstrap.

If you are using bootstrap with Angular just to be able to use it's css functionalities 
then you will don't need NGX-bootstrap. However, if you do need some of the bootstrap 
javascript dependant goodies as modal dialogs, tooltip, carrousel, then it is better to
use some native Angular library as NGX-bootstrap because jQuery as a dom manipulation
library can interfere in the Angular internals. By doing so, as a plus, you are presented
with some other components and facilities that can shorten your development time.

There is another library called [ng-bootstrap](https://ng-bootstrap.github.io/#/home) 
that can be used for the same purpose as NGX-bootstrap. Booth of then provide the 
functionality of all bootstrap widgets and more, like datepicker, rating and typeahead.

## How to ##

To use only the bootstrap css utilities within your app, just link with the bootstrap css as 
you normally would and don't bother with javascript issues. A way to do this in Angular
is to use npm:

```shell
$ npm install bootstrap
```

And then configure in the styles section from `angular.json` file:

```javascript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

By doing this, the compiled distribution version of your app will have a styles.css file 
with all the css from the angular.json `styles` section.

To be able to use all widgets from NGX-bootstrap, in addition to linking with the 
bootstrap css you will have to install NGX-bootstrap by one of two methods:

  1. Install from npm
  2. Install with `ng add`

The latter option allows you to do a modular installation of only the components
you intend to use. For more on this subject see the [NGX-bootstrap installations 
instructions](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started).

To install from npm just run this:

```shell
$ npm install ngx-bootstrap
```

Then just add the required modules in `app.module.ts`:

```javascript
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  // ...
})
export class AppModule {}
```

By using `.forRoot()` method for each module (due the ngx-bootstrap module providers), the 
functionalities will be available in all components and modules of your project 
(global scope).


As an alternative, if you are going to use many of the available modules, you can
create a module just to organize those imports to stay with a cleaner AppModule.
Create a Boostrap module and import the ngx-bootstrap modules (using the `forRoot()` 
method) and also declare thin in the export section of the module.

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    BsDatepickerModule,
    TimepickerModule
  ]
})
export class AppBootstrapModule { }
```

Don't forget to import the Bootstrap module on `app.module.ts`:


```javascript
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

@NgModule({
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  // ...
})
export class AppModule {}

```

Note: Some of ngx-bootstrap modules may have other dependencies as 
`BrowserAnimationsModule` or `bs-datepicker.css`. See the 
[ngx-bootstrap documentation](https://valor-software.com/ngx-bootstrap/#/documentation)
for more information on each module or widget dependence.

## Copyright and license ##

Code and documentation copyright 2021 Fabio M. Blanco. Code released under the
[MIT License](https://github.com/fabio-blanco/test-ngx-bootstrap/blob/master/LICENSE)

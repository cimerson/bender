# Bender

Simple accordion (collapsible content) component in angular 6

(parents-children communication)

A working example can be found [here](https://bender7.herokuapp.com/)

## Installation

Just clone or download and run npm install and then ng serve to start.

Or simply copy bender folder from src/app to yours app

Import the components to your app.module.ts

```
import { GroupComponent } from './bender/bender-group.component';
import { BenderComponent } from './bender/bender.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    BenderComponent
  ],
...
```
 Adjust path if you need './something/bender/bender.component';


## Usage

We can manually handle inputs / outputs with collapsible content (group)

```
<mygroup title="Profile Form" [opened]="isOpen" (toggle)="isOpen = !isOpen">

  <input type="text">
  
  ... any element or component ...
  
</mygroup>
```

Or we can start using the bender component
```
<bender>
  <mygroup title="First Group">this is the content</mygroup>
  <mygroup title="Second Group">
    <input type="text" class="form-control" />
    <button>Send</button>
  </mygroup>
  <mygroup title="Third Group">this is the content</mygroup>
  <mygroup title="Fourth Group">this is the content</mygroup>
  <mygroup title="Fifth Group">this is the content</mygroup>
</bender>
```


## Options

This component have 3 options
1. Open (colapse) first element (group) at start
2. Open selected element and close all others
3. Open/close selected element at any time

(you can check in src/app/bender/bender.component.ts)

## Styling

The base stylesheet is located at src/app/bender/bender.component.css and this stylesheet only includes properties necessary for the Bender to function.

# bender

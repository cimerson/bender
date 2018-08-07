# Bender

Simple accordion (collapsible content) component in angular 6
(parents-children communication)

## Usage

We can manually handle inputs / outputs with collapsible content (group)

<mygroup title="Profile Form" [opened]="isOpen" (toggle)="isOpen = !isOpen">
  <input type="text">
  ... any element or component ...
</mygroup>

Or we can start using the bender component

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



## Options

This component have 3 options
1. Open (colapse) first element (group) at start
2. Open selected element and close all others
3. Open/close selected element at any time

(you can check in src/app/bender/bender.component.ts)

## Styling

The base stylesheet is located at src/app/bender/bender.component.css and this stylesheet only includes properties necessary for the Bender to function.

# bender

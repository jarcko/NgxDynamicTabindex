# NgxDynamicTabindex

## General

Dynamic tabindex Angular attribute directive

## Features

1. Automatically generates tabindex numbers for all nested html elements
2. Re-applies tabindex values on DOM structure changes
3. Allows setting custom order for tabindex-ed elements

## Installation

```
$ npm install --save ngx-dynamic-tabindex
```

## Usage

Import NgxDynamicTabindexModule

```ts
import { NgxDynamicTabindexModule } from 'ngx-dynamic-tabindex';

@NgModule({
    imports: [..., NgxDynamicTabindexModule]
})
export class MyModule {}
```

Add `applyTabIndexes` directive to the parent element in your template. 
Add `tabindex` attributes without value to all nested elements which you want to render index value for.

```html
<div class="container" applyTabIndexes>
    <input type="text" placeholder="input 1" tabindex>

    <div class="wrapped-input">
        <input type="text" placeholder="input 2" tabindex>
    </div>
</div>
```

Order numbers will be applied to each input in from top to bottom.
Result html will look like this:

```html
<div class="container" applytabindexes>
    <input type="text" placeholder="input 1" tabindex="1">

    <div class="wrapped-input">
        <input type="text" placeholder="input 2" tabindex="2">
    </div>
</div>
```

If you need to change the order add `tabIndexAheadOffset` attribute with value to the tabindex-ed element.
The element's tabindex order number will be offset forward in relation to its current position.
Attribute's value defines the number of steps for offset.

```html
<div class="container" applyTabIndexes>
    <input type="text" placeholder="input 1" tabindex>
    <input type="text" placeholder="input 2" tabindex>
    
    <div class="wizard-footer">
        <button tabindex tabIndexAheadOffset="1"><Back</button>
        <button tabindex ><Back</button>
    </div> 
</div>
```

Result html will look like this:

```html
<div class="container" applytabindexes>
    <input matInput type="text" placeholder="input 1" tabindex="1">
    <input matInput type="text" placeholder="input 2" tabindex="2">
    
    <div class="wizard-footer">
        <button tabindexaheadoffset="1" tabindex="4"><Back</button>
        <button tabindex="3"><Back</button>
    </div> 
</div>
```

Works with AngularMaterial.

# Demo project 

[Stackblitz](https://stackblitz.com/edit/applytabindex-directive?file=src/app/directive/apply-tab-indexes.directive.ts)

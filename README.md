# NgxDynamicTabindex

Angular module.

Contains 'applyTabIndexes' attribute directive which automatically generates tabindex numbers for all nested html elements
on each change of the DOM structure.

Add 'tabindex' attribute without value to all nested html elements which you want to render order number for.

```
<div class="container" applyTabIndexes>
    <input matInput type="text" placeholder="input 1" tabindex>

    <div class="wrapped-input">
        <input matInput type="text" placeholder="input 2" tabindex>
    </div>
</div>
```
Order numbers will be applied to each input in from top to bottom. So result html will look like this:

```
<div class="container" applytabindexes>
    <input matInput type="text" placeholder="input 1" tabindex="1">

    <div class="wrapped-input">
        <input matInput type="text" placeholder="input 2" tabindex="2">
    </div>
</div>
```

If you need to change the order you can apply 'tabIndexAheadOffset' attribute with value to the tabindex-ed element.
The element's tabindex order number will be offset forward in relation to its current position.
Attribute's value defines the number of steps for offset.

e.g.:

```
<div class="container" applyTabIndexes>
    <input matInput type="text" placeholder="input 1" tabindex>
    <input matInput type="text" placeholder="input 2" tabindex>
    
    <div class="wizard-footer">
        <button tabindex tabIndexAheadOffset="1"><Back</button>
        <button tabindex ><Back</button>
    </div> 
</div>
```

Result html will look like this:

```
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

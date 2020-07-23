# Vu3-moment
Experiment repo to figure out the best way of building a moment plugin for Vue 3

## Reasons
There has been some changes in Vue 3 that mean we will have to reconsider how users can use the vue-moment plugin

### Removal of filters
vue-moment has always been based on filters and as Vue 3 is removing them, this will require a rethink to move forward. 

### Issues with vue-moment
By trying to appeal to a large community, vue-moment has become very hard to work on with out introducing breaking (or controversial) changes.

Currently we have issues with the size of the bundle and handling invalid dates.

### Use at scale
When building larger projects I have noticed some common patterns that I needed to perform away from installing the vue-moment plugin, I think some can be moved to the plugin options.

## Proposal

### Move to functional components
The biggest change will be moving away from filters to functional components for formatting dates in our templates

The plugin will install a global functional component that can either accept the date as a prop or as the default slot

```html
<format-date>{{ date }}</format-date>
...or...
<format-date :date="date"/>
```

### Formats
Date formats can now be defined in the plugin options, this will help with date formatting consistancy without having to import/inject date format strings into every component.

```js
createApp(App)
    .use(VueMoment, {
        moment, 
        formats: {
            default: 'LLLL',
            short: 'll'
        }
    })
```

```html
<!-- Will show the default 'LLLL' format -->
<format-date :date="date"/> 

<!-- Will show the custom short 'll' format -->
<format-date :date="date" format="short"/>
```

You can also still pass in custom formats in the `format` prop

```html
<!-- Will fallback to show any custom format -->
<format-date :date="date" format="YY-MM-DD"/>
```

### Moment will not be imported by the plugin
This version of the plugin will no longer include `moment` out of the box. Instead it should be imported by the user and passed into the plugin.

```js
import { createApp } from 'vue'
import VueMoment from 'vu3-moment'
import moment from 'moment'

createApp(App)
    .use(VueMoment, {
        moment
    })
```

This will allow users to manage their own `moment` imports and prevent large bundle sizes and duplicate `moment` imports

### More modular design
By leveraging the new Composition API, we can make the new package more flexible and allow users to import custom parts of the package as they need.

```vue
<template>
  {{ formatDate(date, 'LLLL') }}
</template>

<script>
import { useDateFormat } from './compositions/moment'

export default {
  name: 'SomeComponent',

  setup() {
    return {
      formatDate: useDateFormat
    }
  },

  data() {
    return {
      date: '2021-09-09 19:11:00'
    }
  }
}
</script>
```

## Getting started
To start playing with this repo, first install the dependecies
```bash
yarn
```
and then run the dev server
```
yarn dev
```



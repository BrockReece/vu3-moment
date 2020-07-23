import { merge } from 'lodash-es'
import FormatDate from '../components/FormatDate.vue'

export const momentProvider = Symbol()

const defaults = {
    moment: null,
    formats: {
        default: 'lll',
        date: 'll',
        time: 'HH:mm:ss'
    }
}

export default (app, options = { }) => {
    if (!options.moment) {
        throw Error('You need to include a moment in your config')
    } 
    app.component('FormatDate', FormatDate)
    app.provide(momentProvider, merge(defaults, options))
}
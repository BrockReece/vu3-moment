<script>
import { h } from 'vue'
import { useDateFormat, useFindDate } from '../compositions/moment'

export default (props, { slots }) => {    
    let date = useFindDate(props, slots)
    return h('time', useDateFormat(date, props.format))
}
</script>
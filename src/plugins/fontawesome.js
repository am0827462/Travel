import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(faInstagram, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

console.log(agendaItemIcons['registration']);

export default defineComponent({
    name: 'MeetupAgendaItem',
    data() {
        return {
            agendaItemIcons: agendaItemIcons,
            agendaItemDefaultTitles: agendaItemDefaultTitles
        }
    },
    props: {
        agendaItem: {
            type: Object,
            default: {}
        }
    },
    template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="'../../src/assets/icons/icon-'+agendaItemIcons[this.agendaItem.type]+'.svg'" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title" v-text="agendaItem.title?agendaItem.title:agendaItemDefaultTitles[this.agendaItem.type]"></h3>
        <p class="agenda-item__talk" v-if="agendaItem.type=='talk'">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,
});

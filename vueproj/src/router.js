import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home/Home.vue'
import AboutUsPage from './AboutUsPage.vue'
import FacultyPage from './FacultyPage.vue'
import CalendarPage from './CalendarPage.vue'
import ContactPage from './ContactPage.vue'
import History from './views/about-us/History.vue'
import VisionAndMission from './views/about-us/VisionAndMission.vue'
import DeanMessage from './views/about-us/DeanMessage.vue'
import Linkages from './views/about-us/Linkages.vue'
import NewsAndUpdates from './views/about-us/NewsAndUpdates.vue'
import ComputerScience from './views/academic-programs/ComputerScience.vue'
import InformationTechnology from './views/academic-programs/InformationTechnology.vue'
import InformationSystems from './views/academic-programs/InformationSystems.vue'
import DigitalMediaAndInteractiveArts from './views/academic-programs/DigitalMediaAndInteractiveArts.vue'
import LibraryInformationScience from './views/academic-programs/LibraryInformationScience.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 },
  routes: [
    { path: '/', component: Home },
    { path: '/about-us', component: AboutUsPage },
    { path: '/history', component: History },
    { path: '/vision-and-mission', component: VisionAndMission },
    { path: '/dean-message', component: DeanMessage },
    { path: '/message-of-the-dean', redirect: '/dean-message' },
    { path: '/linkages', component: Linkages },
    { path: '/news-and-updates', component: NewsAndUpdates },
    { path: '/computer-science', component: ComputerScience },
    { path: '/information-technology', component: InformationTechnology },
    { path: '/information-systems', component: InformationSystems },
    { path: '/digital-media-and-interactive-arts', component: DigitalMediaAndInteractiveArts },
    { path: '/library-information-science', component: LibraryInformationScience },
    { path: '/faculty-and-staff', component: FacultyPage },
    { path: '/event-calendar', component: CalendarPage },
    { path: '/contact-us', component: ContactPage },
  ],
})

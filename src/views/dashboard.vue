    <script setup lang="ts">
    import { nav } from '../data/navItems.ts'
    </script>
    <template>
        <div>
            <nav>
                <ul>
                    <li v-for="item of nav" :key="item.name">
                        <router-link :to="item.path">{{ item.name }}</router-link>
                    </li>
                </ul>
            </nav>
            <RouterView/>
        </div>
    </template>

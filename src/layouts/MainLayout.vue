<template>
  <div class="main-layout">
    <vs-sidebar v-model="active" open class="sidebar">
      <template #header>
        <div class="sidebar__header">
          <vs-avatar>
            <img src="https://cutt.ly/5fJgjCc" alt="avatar" />
          </vs-avatar>
          <div class="sidebar__username">Kate Kishchuk</div>
        </div>
      </template>
      <vs-sidebar-item id="home" class="sidebar__item" to="/">
        <template #icon>
          <BalanceIcon class="svg-icon" />
        </template>
        Счет
      </vs-sidebar-item>
      <vs-sidebar-item id="history" class="sidebar__item" to="/history">
        <template #icon>
          <HistoryIcon class="svg-icon" />
        </template>
        История
      </vs-sidebar-item>
      <vs-sidebar-item id="planning" class="sidebar__item" to="/planning">
        <template #icon>
          <PlanningIcon class="svg-icon" />
        </template>
        Планирование
      </vs-sidebar-item>
      <vs-sidebar-item id="record" class="sidebar__item" to="/record">
        <template #icon>
          <RecordIcon class="svg-icon" />
        </template>
        Новая запись
      </vs-sidebar-item>
      <vs-sidebar-item id="categories" class="sidebar__item" to="/categories">
        <template #icon>
          <CategoriesIcon class="svg-icon" />
        </template>
        Категории
      </vs-sidebar-item>

      <template #footer>
        <div class="sidebar__footer">
          <div class="sidebar__footer-time">02:10:35</div>
          <vs-button danger size="large">
            Выйти
          </vs-button>
        </div>
      </template>
    </vs-sidebar>
    <router-view />
  </div>
</template>

<script>
import BalanceIcon from '@/assets/icons/currency-rates.svg'
import HistoryIcon from '@/assets/icons/clock.svg'
import PlanningIcon from '@/assets/icons/checklist.svg'
import RecordIcon from '@/assets/icons/new-record.svg'
import CategoriesIcon from '@/assets/icons/list.svg'

export default {
  data: () => ({
    active: 'home'
  }),

  components: { BalanceIcon, HistoryIcon, PlanningIcon, RecordIcon, CategoriesIcon }
}
</script>

<style lang="sass">
.main-layout
  padding-left: 260px
  background-color: rgba(var(--vs-gray-1), 1)
  min-height: 100vh

.sidebar__header
  flex: 1 1
  display: flex
  align-items: center
  justify-content: start

.sidebar__username
  font-weight: 500
  margin-left: 12px
  font-size: 18px

.sidebar__footer
  flex: 1 1
  display: flex
  align-items: center
  justify-content: space-between

.sidebar__footer-time
  background-color: rgba(var(--vs-color), 0.15)
  color: rgba(var(--vs-color), 1)
  padding: 10px 20px
  border-radius: 12px
</style>

<script>
  import { G05Schedule, PPSchedule } from 'components'
  import G05ScheduleData from '../utils/data/g05Schedule.csv'
  import { goto } from '@sapper/app'
  import 'css/global.css'

  let showG05 = true
  const handleAvPerformances = () => {
    showG05 = true
  }
  const handlePP = () => {
    showG05 = false
  }
  const handleBackButton = () => {
    goto('/')
  }

  const dayOne = G05ScheduleData.filter((item) => item.date === '1/9/2021')
</script>

<svelte:head>
  <title>Schedule</title>
</svelte:head>

<div class="container">
  <div>
    <span class="span_back-arrow-wrapper">
      <img
        src="/img/icons/arrow.svg"
        alt="back"
        class="back-arrow"
        on:click={handleBackButton}
      /><span class="title">Schedule</span></span
    >
    <span class="tog" on:click={handleAvPerformances}>AV Performances</span>
    <span>/</span>
    <span class="tog" on:click={handlePP}>Panel Discussions</span>
  </div>

  {#if showG05}
    <G05Schedule />
  {:else}
    <PPSchedule />
  {/if}
</div>

<style>
  .title {
    font-size: 3rem;
    margin-left: 1vw;
  }
  .container {
    font-family: dotgothic16;
  }
  .tog {
    cursor: pointer;
  }
  .tog:hover {
    text-decoration: underline dotted;
  }
</style>

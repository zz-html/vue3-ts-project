<template>
  <div ref="containerRef" class="graph-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
import G6 from '@antv/g6'

const containerRef = ref<HTMLDivElement | null>(null)
let graph: G6.Graph | null = null

onMounted(() => {
  if (!containerRef.value) return

  graph = new G6.Graph({
    container: containerRef.value,
    width: containerRef.value.clientWidth,
    height: containerRef.value.clientHeight,
    layout: { type: 'force' }, // 力导向布局
    modes: {
      default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 支持拖拽缩放
    },
    defaultNode: {
      size: 40,
      style: {
        fill: '#40a9ff',
        stroke: '#096dd9',
      },
      labelCfg: {
        style: {
          fill: '#fff',
          fontSize: 12,
        },
      },
    },
    defaultEdge: {
      style: {
        stroke: '#aaa',
        endArrow: true,
      },
    },
  })

  graph.data({
    nodes: [
      { id: 'router', label: '路由器' },
      { id: 'switch', label: '交换机' },
      { id: 'server', label: '服务器' },
    ],
    edges: [
      { source: 'router', target: 'switch' },
      { source: 'switch', target: 'server' },
    ],
  })

  graph.render()
})

onBeforeUnmount(() => {
  if (graph) {
    graph.destroy()
    graph = null
  }
})
</script>

<style scoped>
.graph-container {
  width: 800px;
  height: 400px;
  border: 1px solid #ddd;
}
</style>

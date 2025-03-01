<template>
  <ProjectPageLatestItems
    :count="project?.modelCount.totalCount || 0"
    :title="title"
    :see-all-url="allProjectModelsRoute(projectId)"
    hide-heading-bottom-margin
  >
    <template #default>
      <CommonLoadingBar :loading="showLoadingBar" class="my-2" />
      <div>
        <ProjectPageModelsListView
          v-if="gridOrList === GridListToggleValue.List"
          :search="debouncedSearch"
          :project="project"
          :project-id="projectId"
          disable-pagination
          @update:loading="queryLoading = $event"
          @clear-search=";(search = ''), updateSearchImmediately()"
        />
        <ProjectPageModelsCardView
          v-if="gridOrList === GridListToggleValue.Grid"
          :search="debouncedSearch"
          :project="project"
          :project-id="projectId"
          disable-pagination
          @update:loading="queryLoading = $event"
          @clear-search=";(search = ''), updateSearchImmediately()"
        />
      </div>
      <ProjectPageModelsNewDialog
        v-model:open="showNewDialog"
        :project-id="projectId"
      />
    </template>
    <template #filters>
      <div class="flex grow mt-2 w-full lg:mt-0 lg:w-auto lg:justify-end">
        <div
          class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 w-full lg:w-auto"
        >
          <div class="flex items-center space-x-2 grow">
            <FormTextInput
              v-model="search"
              name="modelsearch"
              :show-label="false"
              placeholder="Search"
              color="foundation"
              wrapper-classes="grow lg:w-60"
              :show-clear="search !== ''"
              @change="($event) => updateSearchImmediately($event.value)"
              @update:model-value="updateDebouncedSearch"
            ></FormTextInput>
            <LayoutGridListToggle
              v-model="gridOrList"
              v-tippy="'Swap Grid/Card View'"
            />
          </div>
          <div class="flex items-center space-x-2">
            <FormButton
              color="secondary"
              :icon-right="CubeIcon"
              :to="allModelsRoute"
              class="grow"
              @click="trackFederateAll"
            >
              View all in 3D
            </FormButton>
            <FormButton
              v-if="canContribute"
              class="grow"
              :icon-left="PlusIcon"
              @click="showNewDialog = true"
            >
              New
            </FormButton>
            <FormButton v-if="false" @click="onTest">Test</FormButton>
          </div>
        </div>
      </div>
    </template>
  </ProjectPageLatestItems>
</template>
<script setup lang="ts">
import { GridListToggleValue } from '~~/lib/layout/helpers/components'
import type { ProjectPageLatestItemsModelsFragment } from '~~/lib/common/generated/gql/graphql'
import { graphql } from '~~/lib/common/generated/gql'
import { useProjectPageItemViewType } from '~~/lib/projects/composables/projectPages'
import { canModifyModels } from '~~/lib/projects/helpers/permissions'
import { debounce } from 'lodash-es'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { CubeIcon } from '@heroicons/vue/24/outline'
import { allProjectModelsRoute, modelRoute } from '~~/lib/common/helpers/route'
import { SpeckleViewer, type Optional } from '@speckle/shared'
import { useMixpanel } from '~~/lib/core/composables/mp'

graphql(`
  fragment ProjectPageLatestItemsModels on Project {
    id
    role
    visibility
    modelCount: models(limit: 0) {
      totalCount
    }
    ...ProjectPageModelsStructureItem_Project
  }
`)

const props = defineProps<{
  projectId: string
  project: Optional<ProjectPageLatestItemsModelsFragment>
}>()

const mp = useMixpanel()
const trackFederateAll = () =>
  mp.track('Viewer Action', {
    type: 'action',
    name: 'federation',
    action: 'view-all',
    source: 'all models page'
  })

const queryLoading = ref(false)
const search = ref('')
const debouncedSearch = ref('')
const showNewDialog = ref(false)
const showLoadingBar = ref(false)
const title = ref('Models')

const gridOrList = useProjectPageItemViewType(title.value)

const canContribute = computed(() =>
  props.project ? canModifyModels(props.project) : false
)
const allModelsRoute = computed(() => {
  const resourceIdString = SpeckleViewer.ViewerRoute.resourceBuilder()
    .addAllModels()
    .toString()
  return modelRoute(props.projectId, resourceIdString)
})

const updateDebouncedSearch = debounce(() => {
  debouncedSearch.value = search.value.trim()
}, 500)

const updateSearchImmediately = (val?: string) => {
  updateDebouncedSearch.cancel()
  debouncedSearch.value = (val ?? search.value).trim()
}

const onTest = () => {
  // TODO: Remove after RUM tests are done

  // Unhandled rejection
  void new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Unhandled rejection!'))
    }, 200)
  })

  // Uncaught error
  setTimeout(() => {
    throw new Error('Unhandled exception!')
  }, 300)

  // Sync error
  throw new Error('Sync error!')
}

watch(search, (newVal) => {
  if (newVal) showLoadingBar.value = true
  else showLoadingBar.value = false
})

watch(queryLoading, (newVal) => (showLoadingBar.value = newVal))

// TODO: Remove after RUM tests are done
// if (process.server) {
//   onTest()
// }
</script>

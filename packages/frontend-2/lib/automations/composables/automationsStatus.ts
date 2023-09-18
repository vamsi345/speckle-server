import { ApolloCache } from '@apollo/client/core'
import { OnModelVersionCardAutomationsStatusUpdatedSubscription } from '~~/lib/common/generated/gql/graphql'
import { Get } from 'type-fest'
import { onModelVersionCardAutomationsStatusUpdated } from '~~/lib/automations/graphql/subscriptions'
import { useApolloClient, useSubscription } from '@vue/apollo-composable'
import { useLock } from '~~/lib/common/composables/singleton'

/**
 * Track project model/version automations status updates and makes cache updates accordingly.
 * Optionally you can provide an extra handler to be called when an event is received.
 */
export const useModelVersionCardAutomationsStatusUpdateTracking = (
  projectId: MaybeRef<string>,
  handler?: (
    data: NonNullable<
      Get<
        OnModelVersionCardAutomationsStatusUpdatedSubscription,
        'projectAutomationsStatusUpdated'
      >
    >,
    cache: ApolloCache<unknown>
  ) => void
) => {
  const { onResult } = useSubscription(
    onModelVersionCardAutomationsStatusUpdated,
    () => ({
      projectId: unref(projectId)
    })
  )

  const { hasLock } = useLock(
    computed(
      () => `useModelVersionCardAutomationsStatusUpdateTracking-${unref(projectId)}`
    )
  )

  const apollo = useApolloClient().client

  onResult((result) => {
    if (!result.data?.projectAutomationsStatusUpdated || !hasLock.value) return

    // Just by virtue of receiving this event the cache should be updated
    // In case we need to do any global stuff, feel free to do it below:
  })

  onResult((result) => {
    if (!result.data?.projectAutomationsStatusUpdated) return
    const event = result.data.projectAutomationsStatusUpdated
    handler?.(event, apollo.cache)
  })
}

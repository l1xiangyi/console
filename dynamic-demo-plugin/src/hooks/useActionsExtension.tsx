import { Action, ExtensionHook } from "@openshift-console/dynamic-plugin-sdk"
import { useState } from 'react'

const useActionsExtension: ExtensionHook<Array<Action>, any> = (data) => {
  const href = `monitoring/metrics`
  const podName = data.metadata.name
  const [actions] = useState<Array<Action>>([
    {
      id: 'contributed-menu-item',
      label: `Menu item from dynamic plugin`,
      description: podName,
      tooltip: 'This menu item was contributed by the demo plugin',
      cta: { href }
    }
  ])

  return [actions, true, null]
}

export default useActionsExtension

import { render } from '@testing-library/vue'
import EventCard from '@/components/EventCard'

import { events } from './dbTest.json'

describe('<EventCard />', () => {
  test('it should mounts component with props', () => {
    const { getByText } = render(EventCard, { props: { eventData: events[0] } })
    const title = getByText('Exercise Practice')

    expect(title).toBeInTheDocument()
  })
})

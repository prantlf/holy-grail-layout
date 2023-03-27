import { comp, elem, event } from 'bacom'
import template from './index.html'
import style from './index.css'

@comp({ tag: 'holy-grail', styles: [style], template })
// eslint-disable-next-line no-unused-vars
class HolyGrailElement extends HTMLElement {
  @elem()
  private startSide: HTMLElement

  @elem()
  private endSide: HTMLElement

  @event()
  onSlotChange({ target }: { target: HTMLSlotElement }): void {
    if (target.name.endsWith('-side')) this.#toggleSlot(target)
  }

  #toggleSlot(slot: HTMLSlotElement): void {
    // Hide the slot's parent if the slot is empty
    const children = slot.assignedNodes()
    slot.parentElement.classList[children.length ? 'remove' : 'add']('hidden')
    // Half the sides if they are both present
    const sideSlots = this.querySelectorAll('[slot*=-side]')
    const method = sideSlots.length === 2 ? 'add' : 'remove'
    this.startSide.classList[method]('half')
    this.endSide.classList[method]('half')
  }
}
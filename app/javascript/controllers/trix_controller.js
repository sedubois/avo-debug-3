import {Controller} from "@hotwired/stimulus"
import Trix from "trix"

export default class extends Controller {
  configureToolbar(event) {
    const groupElement = event.target.toolbarElement.querySelector(".trix-button-group--block-tools")
    groupElement.insertAdjacentHTML("beforeend",
        '<button type="button" class="trix-button trix-button--icon trix-button--icon-horizontal-rule" data-trix-action="x-horizontal-rule" tabindex="-1" title="Add divider"></button>')
  }

  invokeAction(event) {
    if (event.actionName === "x-horizontal-rule") {
      const attachment = new Trix.models.Attachment({ content: "<hr>", contentType: "vnd.rubyonrails.horizontal-rule.html" })
      event.target.editor.insertAttachment(attachment)
    }
  }
}

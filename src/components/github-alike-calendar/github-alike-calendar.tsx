import { Component, h, Prop, Element } from "@stencil/core";
import GitHubCalendar from "github-calendar";
@Component({
  tag: "github-alike-calendar",
  styleUrl: "github-alike-calendar.css",
  shadow: true
})
export class GithubAlikeCalendar {
  @Prop() username: string;
  @Prop() responsive: boolean;
  @Element() el: HTMLElement;
  componentDidLoad() {
    // Thanks for @IonicaBizau for Github Calender lib
    GitHubCalendar(this.el.shadowRoot.getElementById("calendar"), "imhta", {responsive: this.responsive});
  }
  render() {
    return (
      <div class="calendar" id="calendar">
        <p>loading github data...</p>
      </div>
    );
  }
}

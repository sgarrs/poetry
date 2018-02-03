import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Poem.scss';

class Poem extends React.Component {
  render() {
    return (
      <div className={styles.poem}>
        <h1>Church Going</h1>
        <ul>
          <li>Once I am sure there's nothing going on</li>
          <li>I step inside, letting the door thud shut.</li>
          <li>Another church: matting, seats, and stone,</li>
          <li>And little books; sprawlings of flowers, cut</li>
          <li>For Sunday, brownish now; some brass and stuff</li>
          <li>Up at the holy end; the small neat organ;</li>
          <li>And a tense, musty, unignorable silence,</li>
          <li>Brewed God knows how long. Hatless, I take off</li>
          <li>My cycle-clips in awkward reverence.</li>
        </ul>
        <ul>
          <li>Move forward, run my hand around the font.</li>
          <li>From where I stand, the roof looks almost new -</li>
          <li>Cleaned, or restored? Someone would know: I don't.</li>
          <li>Mounting the lectern, I peruse a few</li>
          <li>Hectoring large-scale verses, and pronounce</li>
          <li>'Here endeth' much more loudly than I'd meant.</li>
          <li>The echoes snigger briefly. Back at the door</li>
          <li>I sign the book, donate an Irish sixpence,</li>
          <li>Reflect the place was not worth stopping for.</li>
        </ul>
        <ul>
          <li>Yet stop I did: in fact I often do,</li>
          <li>And always end much at a loss like this,</li>
          <li>Wondering what to look for; wondering, too,</li>
          <li>When churches will fall completely out of use</li>
          <li>What we shall turn them into, if we shall keep</li>
          <li>A few cathedrals chronically on show,</li>
          <li>Their parchment, plate and pyx in locked cases,</li>
          <li>And let the rest rent-free to rain and sheep.</li>
          <li>Shall we avoid them as unlucky places?</li>
        </ul>
        <ul>
          <li>Or, after dark, will dubious women come</li>
          <li>To make their children touch a particular stone;</li>
          <li>Pick simples for a cancer; or on some</li>
          <li>Advised night see walking a dead one?</li>
          <li>Power of some sort will go on</li>
          <li>In games, in riddles, seemingly at random;</li>
          <li>But superstition, like belief, must die,</li>
          <li>And what remains when disbelief has gone?</li>
          <li>Grass, weedy pavement, brambles, buttress, sky,</li>
        </ul>
        <ul>
          <li>A shape less recognisable each week,</li>
          <li>A purpose more obscure. I wonder who</li>
          <li>Will be the last, the very last, to seek</li>
          <li>This place for what is was; one of the crew</li>
          <li>That tap and jot and know what rood-lofts were?</li>
          <li>Some ruin-bibber, randy for antique,</li>
          <li>Or Christmas-addict, counting on a whiff</li>
          <li>Of gown-and-bands and organ-pipes and myrrh?</li>
          <li>Or will he be my representative,</li>
        </ul>
        <ul>
          <li>Bored, uninformed, knowing the ghostly silt</li>
          <li>Dispersed, yet tending to this cross of ground</li>
          <li>Through suburb scrub because it held unsplit</li>
          <li>So long and equably what since is found</li>
          <li>Only in separation - marriage, and birth,</li>
          <li>And death, and thoughts of these - for which was built</li>
          <li>This special shell? For, though I've no idea</li>
          <li>What this accoutred frowsty bran is worth,</li>
          <li>It pleases me to stand in silence here;</li>
        </ul>
        <ul>
          <li>A serious house on serious earth it is,</li>
          <li>In whose blent air all our compulsions meet,</li>
          <li>Are recognized, and robed as destinies.</li>
          <li>And that much never can be obsolete,</li>
          <li>Since someone will forever be surprising</li>
          <li>A hunger in himself to be more serious,</li>
          <li>And gravitating with it to this ground,</li>
          <li>Which, he once heard, was proper to grow wise in,</li>
          <li>If only that so many dead lie round.</li>
        </ul>
      </div>
    )
  }
}

export default Poem;

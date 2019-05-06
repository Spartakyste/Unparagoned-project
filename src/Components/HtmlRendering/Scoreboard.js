import React from 'react';
import CurrentCompetition from './CurrentCompetition';

const Scoreboard = () => {
    return (
        <article className="level-left">
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Team</th>
                        <th><abbr title="Played">Pld</abbr></th>
                        <th><abbr title="Won">W</abbr></th>
                        <th><abbr title="Drawn">D</abbr></th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td><a href="">Gempat</a>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td><a href="">Chronicius</a></td>
                        <td>32</td>
                        <td>20</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td><a href="">William</a>
                        </td>
                        <td>28</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td><a href="">Josh</a>
                        </td>
                        <td>20</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td><a href="">Spartakyste</a>
                        </td>
                        <td>8</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td><a href="">Leicester City</a>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td><a href="">Arsenal</a></td>
                        <td>38</td>
                        <td>20</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td><a href="">Leicester City</a>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td><a href="">Leicester City</a>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td><a href="">Leicester City</a>
                        </td>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </table>
            <aside className="level-right">
                <CurrentCompetition />
            </aside>
        </article>
    );
}

export default Scoreboard;
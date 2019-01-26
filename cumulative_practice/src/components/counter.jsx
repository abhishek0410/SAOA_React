import React ,{Component} from 'react' ;


class Counter extends Component{
    state = {
        counter :2 ,
        //Adding a list to be diplayed as well : 
        tags : ["tag1","tag2","tag3","tag4"],
    }

    render(){
        return(
            <div>
                <span class={this.formatCounter()}>{this.state.counter}</span>
                <button type="button" class="btn btn-primary">Increment</button>
                <li>{this.state.tags.map((temp)=> <li>{temp}   </li>)}</li>
            </div>
        );
    }
    formatCounter(){
        return(this.state.counter==0?"badge badge-warning" : "badge badge-success");
    }
}

export default Counter;
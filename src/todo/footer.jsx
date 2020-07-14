import '../assets/style/footer.scss'

export default {
  data() {
    return {
      author: 'Ling'
    }
  },
  render() {
    return (
      <div class="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
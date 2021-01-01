function Role(role) {
  this.role = role;
}

function Company(name) {
  Role.call(this);
  this.name = name;
}

Role.prototype.domain = () => {
  this.domain = "Engineering";
};

Company.prototype = Object.create(Role.prototype);
Company.prototype.organization = () => {
  this.organization = "Digi";
  console.log(this.role, this.domain, this.organization, this.name);
};

const company = new Company("STSPL");
company.domain();
company.organization();
console.log(company);

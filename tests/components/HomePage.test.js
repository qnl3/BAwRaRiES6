import test from 'ava';
import React from 'react';
import { HomePage } from '../../src/components/HomePage';
import { shallow } from 'enzyme';

const one = (t) => {
  conat w = shallow(<HomePage />);
  t.is(w.find(`h1`).length,1 );
};
one.title = "test Home Heading"

test(one);

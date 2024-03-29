#!/usr/bin/python3
"""Define a function attributes."""


def add_attribute(obj, att, value):
    """Add a new attribute to an object if possible considered.
    Raises:
        TypeError: If the attribute cannot be added.
    """
    if not hasattr(obj, "__dict__"):
        raise TypeError("can't add new attribute format")
    setattr(obj, att, value)

